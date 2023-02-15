import { TaskType } from "@/utils/types";
import { FC } from "react";
import TaskItem from "./TaskItem";

const TaskGrid: FC<{
  data: TaskType[];
}> = ({ data }) => {
  return (
    <section className="pt-4 ">
      <div className="flex justify-between">
        <h2 className="text-3xl capitalize font-semibold">Tasks</h2>
        <button
          onClick={() => window.location.reload()}
          className="py-1 px-2 bg-teal-500 text-white rounded-md font-semibold capitalize">
          refresh
        </button>
      </div>
      {!data || data.length <= 0 ? (
        <div className="mt-5">
          <h3 className="text-center capitalize text-3xl text-gray-900 font-semibold">
            There is not task!
          </h3>
          <p className="text-center capitalize text-lg text-gray-600">
            Try adding task with the form above
          </p>
        </div>
      ) : null}
      <div className="py-2 grid grid-cols-3 gap-3">
        {data.map((task, index) => (
          <TaskItem task={task} key={index} />
        ))}
      </div>
    </section>
  );
};

export default TaskGrid;
