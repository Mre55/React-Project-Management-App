import noProjects from "../assets/no-projects.png";

const NoProject = () => {
  return (
    <div className="flex flex-col items-center absolute top-40 right-1/3">
      <img src={noProjects} alt="no-projects" className="h-24" />
      <h2 className="font-bold my-5 text-2xl tracking-wide text-[#574b33]">
        No Project Selected
      </h2>
      <p className="text-[#71654d] mb-12">
        Select a project or get started with a new one
      </p>
      <button className="h-12 w-52 rounded-lg text-lg font-normal bg-[#3c3016] text-stone-300/75">
        Create new project
      </button>
    </div>
  );
};

export default NoProject;
