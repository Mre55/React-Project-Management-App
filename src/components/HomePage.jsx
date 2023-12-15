import noProjects from "../assets/no-projects.png";

const HomePage = ({ onAdd }) => {
  return (
    <div className="flex flex-col items-center absolute top-40 right-1/3">
      <img src={noProjects} alt="no-projects" className="h-24" />
      <h2 className="font-bold my-5 text-3xl tracking-wide text-[#837967]">
        No Project Selected
      </h2>
      <p className="text-lg text-[#acaaa8] mb-12">
        Select a project or get started with a new one
      </p>
      <button
        className="h-12 w-52 rounded-lg text-lg font-normal bg-[#392d13] text-stone-300/75"
        onClick={onAdd}
      >
        Create new project
      </button>
    </div>
  );
};

export default HomePage;
