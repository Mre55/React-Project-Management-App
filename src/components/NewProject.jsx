import React, { useState, useRef } from "react";
import Input from "./Input";

const NewProject = ({ onAdd }) => {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = (event) => {
    event.preventDefault();

    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // validation...

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
            Cancel
          </button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label={"Title"} />
        <Input ref={description} label={"Description"} textarea />
        <Input type="date" ref={dueDate} label={"Due Date"} />
      </div>
      {/* <form
      className="absolute top-36 left-1/4 ml-12 w-7/12"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-end mb-8 gap-x-5">
        <button className="text-lg text-[#302f2d]">Cancel</button>
        <button className="h-12 w-24 rounded-lg text-lg font-normal bg-[#272521] text-[#fff]">
          Save
        </button>
      </div>
      <div className="flex flex-col">
        <label
          htmlFor="title"
          className="m-0 font-bold text-lg tracking-wide text-[#777369]"
        >
          TITLE
        </label>
        <input
          ref={titleRef}
          id="title"
          type="text"
          className="mt-2.5 pl-1 mb-5 h-10 bg-[#d4cfc466] text-[#77736a] border-b-[#302f2d]-500 rounded-tl rounded-tr border-2 border-b-[#77736a] outline-none"
        />
        <label
          htmlFor="description"
          className="m-0 font-bold text-lg tracking-wide text-[#777369]"
        >
          DESCRIPTION
        </label>
        <textarea
          ref={descriptionRef}
          id="description"
          className="mt-2.5 mb-5 pl-1 h-20 bg-[#d4cfc466] text-[#77736a] border-b-[#302f2d]-500 rounded-tl rounded-tr border-y border-b-[#d1d0cc] outline-none"
        ></textarea>
        <label
          htmlFor="due-date"
          className="m-0 font-bold text-lg tracking-wide text-[#777369]"
        >
          DUE DATE
        </label>
        <input
          ref={dateInputRef}
          id="due-date"
          type="date"
          className="mt-2.5 mb-5 h-10 bg-[#d4cfc466] text-[#77736a] border-b-[#302f2d]-500 rounded-tl rounded-tr border-2 border-b-[#77736a] outline-none"
        />
      </div>
    </form> */}
    </div>
  );
};

export default NewProject;
