import Button from "./Button";

const ProjectsSidebar = ({ onStartAddProject, onOpenProject, items }) => {
  return (
    <aside className="px-8 py-16 bg-stone-900 w-1/3 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
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
