import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSideBar";
import NewProject from "./components/NewProject";
import { DUMMY_ITEMS } from "./util/data";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };

    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleOpenProject = (id) => {
    const openFilteredItem = items.filter((item) => item.id === id);

    setMainPage({ projectItem: openFilteredItem });
    setSelectedProjectId(id);
  };

  console.log("projectsState is ", projectsState);

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="min-h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onStartAddProject={handleStartAddProject}
        onOpenProject={handleOpenProject}
        items={items}
      />
      {content}
    </main>
  );
}

export default App;
