import { Document } from "mongoose";
import z from "zod";

export const zTask = z.object({
  content: z.string(),
  done: z.boolean(),
});

type TType = z.infer<typeof zTask>;

export interface TaskType extends Document, TType {}
