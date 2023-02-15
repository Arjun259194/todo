import taskModel from "@/models/task";
import { TaskType } from "@/utils/types";
import { Document } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

interface responseTask extends Document, TaskType {}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  switch (req.method) {
    case "PUT":
      try {
        const task: responseTask | null = await taskModel.findOne({ _id: id });
        if (!task) return res.status(404).json({ message: "task not found" });
        task.done = !task.done;
        await task.save();
        res.status(200).json({ message: "ok" });
      } catch (error) {
        return res.status(502).json({ error: error });
      }
      break;

    default:
      return res.status(405).json({ message: "method not allowed" });
      break;
  }
}
