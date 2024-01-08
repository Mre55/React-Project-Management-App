import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSideBar";
import HomePage from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import ProjectItem from "./components/ProjectItem";
import { DUMMY_ITEMS } from "./util/data";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  const handleNewProject = ({ id, title, description, date }) => {
    setItems((prevItems) => {
      return [...prevItems, { id, title, description, date }];
    });
  };

  const handleStartAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleOpenProject = (id) => {
    const openFilteredItem = items.filter((item) => item.id === id);

    setMainPage({ projectItem: openFilteredItem });
    setSelectedProjectId(id);
  };

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject />;
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
