import React from "react";

import NewTask from "./NewTask.jsx";

const ProjectItem = ({ items }) => {

  return (
    <section className="absolute top-36 left-1/4 ml-12 w-7/12">
      {items.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between items-start mb-8 gap-x-5 border-b-2 border-b-[#e3e2df]">
            <div>
              <h4 className="text-4xl font-bold text-[#4e4e4e]">
                {item.title}
              </h4>
              <p className="text-lg mt-4 mb-6 text-[#a19d94]">{item.date}</p>
              <p className="mb-6 text-xl text-[#53504b]">{item.description}</p>
            </div>
            <button className="text-lg text-[#626060]">Delete</button>
          </div>

          <h3 className="mb-4 text-3xl font-bold text-[#4e4e4e]">Tasks</h3>
          <NewTask />

          {item.tasks && (
            <div className="bg-[#ebecedb3] py-7 px-4 rounded-md mt-7">
              {item.tasks.map((task) => (
                <p
                  key={task.id}
                  className="flex justify-between my-1.5 text-lg"
                >
                  <span>{task.title}</span> <button>Clear</button>
                </p>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ProjectItem;
