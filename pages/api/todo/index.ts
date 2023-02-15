import taskModel from "models/task";
import { NextApiRequest, NextApiResponse } from "next";
import connectDB from "utils/connectDB";
import { z } from "zod";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectDB();
  switch (req.method) {
    case "GET":
      try {
        const tasks = await taskModel.find().exec();
        return !tasks || tasks === undefined
          ? res.status(404).json({ message: "no task found" })
          : res.status(200).json(tasks);
      } catch (error) {
        res.status(502).json({ message: "error", error: error });
      }
      break;
    case "POST":
      try {
        const { content }: { content: string } = req.body;
        if (!z.string().safeParse(content)) {
          return res.status(400).json({ message: "bad request, sent data not valid" });
        }
        const newTask = new taskModel({ content: content, done: false });
        await newTask.save();
        res.status(200).json({ message: "ok" });
      } catch (error) {
        res.status(502).json({ message: "error", error: error });
      }
      break;

    default:
      return res.status(405).json({ message: "method not allowed" });
  }
}
