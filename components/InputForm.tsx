import { ChangeEvent, useState } from "react";

const InputForm = () => {
  const [content, setContent] = useState<string>("");

  const changeHandler = (event: ChangeEvent<HTMLTextAreaElement>) =>
    setContent(event.target.value);

  const createTask = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: content,
        }),
      });

      if (!response.ok) {
        alert("error, can't create task");
      }

      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="py-3">
      <h2 className="mb-2 text-3xl font-semibold capitalize">Create a list</h2>
      <textarea
        className="w-full p-2 min-h-[10rem] max-h-[14rem] border-2 border-gray-200 focus:border-gray-300 rounded-xl shadow-md focus:shadow-lg focus:outline-none scrollbar-hide"
        onChange={changeHandler}
        name="content"
        value={content}
        id="content"></textarea>
      <button
        onClick={createTask}
        className="mt-2 px-4 py-2 text-lg text-center bg-teal-500 text-white font-semibold rounded-3xl hover:rounded-xl transition-all duration-200 ease-in-out  capitalize">
        create
      </button>
    </section>
  );
};

export default InputForm;
