import React from "react";

const ProjectItem = () => {
  return (
    <section className="absolute top-36 left-1/4 ml-12 w-7/12">
      <div className="flex justify-between items-start mb-8 gap-x-5 border-b-2 border-b-[#e3e2df]">
        <div>
          <h4 className="text-4xl font-bold text-[#4e4e4e]">Learning React</h4>
          <p className="text-lg mt-4 mb-6 text-[#a19d94]">Dec 29, 2024</p>
          <p className="mb-6 text-xl text-[#53504b]">
            Learn React from the group up.
          </p>
          <p className="mb-4 text-xl text-[#53504b]">
            Start with the basics, finish with advanced knowledge.
          </p>
        </div>
        <button className="text-lg text-[#626060]">Delete</button>
      </div>

      <h3 className="mb-4 text-3xl font-bold text-[#4e4e4e]">Tasks</h3>
      <form className="flex items-center gap-x-12">
        <input
          type="text"
          className="mt-2.5 pl-1 w-5/12 mb-5 h-10 bg-[#e1e0e0] text-[#77736a] border-b-[#302f2d]-500 rounded outline-none"
        />
        <button className="m-0 text-xl tracking-wide text-[#4e4e4e]">
          Add Task
        </button>
      </form>

      <div className="bg-[#ebecedb3] py-7 px-4 rounded-md mt-7">
        <p className="flex justify-between my-1.5 text-lg">
          <span>Practic, practic, practice!</span> <button>Clear</button>
        </p>
        <p className="flex justify-between my-1.5 text-lg">
          <span>Learn advanced concepts</span> <button>Clear</button>
        </p>
      </div>
    </section>
  );
};

export default ProjectItem;
