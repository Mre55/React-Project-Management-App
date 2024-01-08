const ProjectsSidebar = ({ onAdd, onOpenProject, items }) => {
  return (
    <aside className="px-8 py-16 bg-stone-900 w-1/3 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <button
          className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
          onClick={onAdd}
        >
          + Add Project
        </button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id} className="my-2.5 text-lg text-[#bbb9b5]">
            <button onClick={() => onOpenProject(item.id)}>{item.title}</button>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
