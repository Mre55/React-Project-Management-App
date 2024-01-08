import React, { useRef } from "react";

const NewTask = () => {
  const inputRef = useRef(null);

  // const handleNewTask = (newTaskInputVal) => {
  //   setCurrentItem((prevItem) => {
  //     console.log("prevItem in handleNewTask is ", prevItem[0].tasks);
  //     return [
  //       ...prevItem,
  //       prevItem[0].tasks.push({ id: new Date(), title: newTaskInputVal }),
  //     ];
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCurrentItem((prevItem) => {
      return [
        ...prevItem,
        prevItem[0].tasks.push({
          id: new Date(),
          title: inputRef.current.value,
        }),
      ];
    });
  };

  return (
    <form className="flex items-center gap-x-12" onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        className="mt-2.5 pl-1 w-5/12 mb-5 h-10 bg-[#e1e0e0] text-[#77736a] border-b-[#302f2d]-500 rounded outline-none"
      />
      <button className="m-0 text-xl tracking-wide text-[#4e4e4e]">
        Add Task
      </button>
    </form>
  );
};

export default NewTask;
