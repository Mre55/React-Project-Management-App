import { useState } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NewProject from "./components/NewProject";
import ProjectItem from "./components/ProjectItem";
import { DUMMY_ITEMS } from "./util/data";

function App() {
  const [mainPage, setMainPage] = useState({
    homePage: true,
    newProject: false,
    projectItem: false,
  });

  const [selectedProjectId, setSelectedProjectId] = useState("");

  const handleAddProject = () => {
    setMainPage((prevPage) => {
      return { ...!prevPage, newProject: true };
    });
  };

  const handleOpenProject = (id) => {
    setMainPage((prevPage) => {
      return { ...!prevPage, projectItem: true };
    });
    setSelectedProjectId(id);
  };

  return (
    <div className="relative min-h-screen">
      <NavBar
        onAdd={handleAddProject}
        onOpenProject={handleOpenProject}
        items={DUMMY_ITEMS}
      />
      {mainPage.homePage && <HomePage onAdd={handleAddProject} />}
      {mainPage.newProject && <NewProject />}
      {mainPage.projectItem && (
        <ProjectItem items={DUMMY_ITEMS} projectId={selectedProjectId} />
      )}
    </div>
  );
}

export default App;
