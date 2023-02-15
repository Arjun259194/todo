import { TaskType } from "@/utils/types";
import { model, models, Schema } from "mongoose";

const TaskSchema: Schema = new Schema(
  {
    content: {
      type: String,
    },
    done: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "Tasks", timestamps: true }
);

const taskModel = models.Task || model<TaskType>("Task", TaskSchema);

export default taskModel;
