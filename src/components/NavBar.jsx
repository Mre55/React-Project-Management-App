import React from "react";

const NavBar = () => {
  return (
    <section className="pt-20 pl-12 absolute top-10 left-0 bg-zinc-900 rounded-tr-3xl min-h-screen w-1/4 text-gray-300">
      <div>
        <h2 className="font-semibold text-2xl tracking-wide">YOUR PROJECTS</h2>
        <button className="mt-16 h-12 w-40 rounded-lg text-lg font-normal bg-amber-100/[.1] text-stone-300/75">
          + Add Project
        </button>
      </div>
      <div className="mt-12">
        <p className="my-2.5 text-lg text-[#bbb9b5]">Learning React</p>
        <p className="my-2.5 text-lg text-[#bbb9b5]">Mastering React</p>
      </div>
    </section>
  );
};

export default NavBar;
