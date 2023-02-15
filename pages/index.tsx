import InputForm from "@/components/InputForm";
import TaskGrid from "@/components/TaskGrid";
import { TaskType } from "@/utils/types";
import Meta from "components/Meta";
import type { GetServerSideProps, NextPage } from "next";

interface props {
  data: TaskType[];
}

const Home: NextPage<props> = ({ data }) => {
  return (
    <div className="">
      <Meta />
      <main className="w-5/6 mx-auto ">
        <InputForm />
        <TaskGrid data={data} />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/todo");
    if (!res.ok)
      return {
        props: {
          data: [],
        },
      };

    const data = await res.json();

    return {
      props: {
        data: data,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        data: [],
      },
    };
  }
};
export default Home;
