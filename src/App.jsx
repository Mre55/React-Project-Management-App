import { useState } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NewProject from "./components/NewProject";
import ProjectItem from "./components/ProjectItem";

function App() {
  const [mainPage, setMainPage] = useState({
    homePage: true,
    newProject: false,
    projectItem: false,
  });

  const handleAddProject = () => {
    setMainPage((prevPage) => {
      return { ...!prevPage, newProject: true };
    });
  };

  const handleOpenProject = () => {
    setMainPage((prevPage) => {
      return { ...!prevPage, projectItem: true };
    });
  };

  return (
    <div className="relative min-h-screen">
      <NavBar onAdd={handleAddProject} onOpenProject={handleOpenProject} />
      {mainPage.homePage && <HomePage onAdd={handleAddProject} />}
      {mainPage.newProject && <NewProject />}
      {mainPage.projectItem && <ProjectItem />}
    </div>
  );
}

export default App;
