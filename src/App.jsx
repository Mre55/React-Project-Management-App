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

  const handleNewProject = ({ id, title, description, date }) => {
    console.log("the new project id is ", id);
    console.log("the new project title is ", title);
    console.log("the new project description is ", description);
    console.log("the new project date is ", date);
  };

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
      {mainPage.newProject && <NewProject onSave={handleNewProject} />}
      {mainPage.projectItem && (
        <ProjectItem items={DUMMY_ITEMS} projectId={selectedProjectId} />
      )}
    </div>
  );
}

export default App;
