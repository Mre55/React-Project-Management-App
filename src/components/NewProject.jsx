import React, { useState, useRef } from "react";
import Input from "./Input";

const NewProject = ({ onSave }) => {
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const dateInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const selectedDate = dateInputRef.current.value;
    const dateObject = new Date(selectedDate);

    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = dateObject.toLocaleDateString("en-US", options);

    onSave({
      id: new Date(),
      title: titleRef.current.value,
      description: descriptionRef.current.value,
      date: formattedDate,
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
          <button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input label={"Description"} textarea />
        <Input label={"Due Date"} />
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
