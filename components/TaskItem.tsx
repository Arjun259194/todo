import { TaskType } from "@/utils/types";
import Link from "next/link";
import { FC } from "react";

const TaskItem: FC<{
  task: TaskType;
}> = ({ task }) => {
  const removeTask = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/todo/${task._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) return alert("Error updating");
      return window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  const changeStatus = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/todo/${task._id}/toggle`, {
        method: "PUT",
        headers: {
          "Content-Type": "applications/json",
        },
      });
      if (!res.ok) return alert("Error, can not update");
      return window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <article
      onDoubleClick={changeStatus}
      className={`min-h-[10rem] relative group p-2.5 flex flex-col overflow-hidden rounded-md shadow-lg border-2 border-black/10 cursor-pointer  ${
        task.done ? "bg-green-100" : "bg-red-100"
      }`}>
      <div className="w-full flex justify-between mb-2 self-end">
        <button onClick={removeTask}>❌</button>
      </div>
      <h4
        className={` ${
          task.done ? "line-through text-black/50" : ""
        } text-lg font-semibold  capitalize`}>
        {task.content.length > 75 ? task.content.substring(0, 75) + "..." : task.content}
      </h4>

      <button
        className="py-1 px-2 m-1 absolute bottom-0 left-0 bg-teal-500 text-white
       font-semibold rounded-full capitalize translate-y-full opacity-0 pointer-events-none
        group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto
         transition-all duration-200">
        <Link href={`/task/${task._id}`}>more</Link>
      </button>
    </article>
  );
};

export default TaskItem;
