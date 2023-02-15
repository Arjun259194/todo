import { TaskType } from "@/utils/types";
import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";

const task: NextPage<{
  data: TaskType | null;
}> = ({ data }) => {
  return (
    <div className="w-5/6 mx-auto flex flex-col items-center">
      {!data ? (
        <>
          <span>not data found</span>
        </>
      ) : (
        <>
          <div className="w-full flex flex-col items-center">
            <span className="text-2xl">Status</span>
            <span>{data.done ? "✅" : "❌"}</span>
          </div>
          <h2 className="text-3xl text-center font-semibold capitalize ">
            {data.content}
          </h2>
          <Link href="/">
            <button className="py-1 px-2 mt-5 bg-teal-500 text-white text-xl font-semibold rounded-xl capitalize">
              go back
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const { id } = context.query;

  try {
    const res = await fetch(`http://localhost:3000/api/todo/${id}`);
    const data = await res.json();
    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
};

export default task;
