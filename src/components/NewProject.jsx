import React from "react";

const NewProject = () => {
  return (
    <section className="absolute top-36 left-1/4 ml-12 w-7/12">
      <div className="flex justify-end mb-8 gap-x-5">
        <button className="text-lg text-[#302f2d]">Cancel</button>
        <button className="h-12 w-24 rounded-lg text-lg font-normal bg-[#272521] text-[#fff]">
          Save
        </button>
      </div>
      <form className="flex flex-col">
        <label
          htmlFor="title"
          className="m-0 font-bold text-lg tracking-wide text-[#777369]"
        >
          TITLE
        </label>
        <input
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
          id="due-date"
          type="date"
          className="mt-2.5 mb-5 h-10 bg-[#d4cfc466] text-[#77736a] border-b-[#302f2d]-500 rounded-tl rounded-tr border-2 border-b-[#77736a] outline-none"
        />
      </form>
    </section>
  );
};

export default NewProject;
