import taskModel from "@/models/task";
import { TaskType } from "@/utils/types";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  switch (req.method) {
    case "GET":
      try {
        const task: TaskType | null = await taskModel.findById(id).exec();
        if (!task) return res.status(404).json({ message: "no task found" });
        return res.status(200).json(task);
      } catch (error) {
        return res.status(502).json({ error: error });
      }
      break;
    case "DELETE":
      try {
        await taskModel.findByIdAndRemove(id).exec();
        return res.status(200).json({ message: "task deleted" });
      } catch (error) {
        return res.status(502).json({ error: error });
      }

    case "PUT":
      const { content }: { content: string } = req.body;
      try {
        if (!z.string().safeParse(content))
          return res.status(400).json({ message: "bad request, sent data not valid" });

        await taskModel.findOneAndUpdate({ _id: id }, { content: content }).exec();
        return res.status(200).json({ message: "updated" });
      } catch (error) {
        return res.status(502).json({ error: error });
      }
      break;

    default:
      return res.status(405).json({ message: "method not allowed" });
      break;
  }
}
