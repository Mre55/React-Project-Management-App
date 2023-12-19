import { useState } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NewProject from "./components/NewProject";
import ProjectItem from "./components/ProjectItem";

const DUMMY_ITEMS = [
  {
    id: "d1",
    title: "Learning React",
    description: "Learn React from the group up.",
    date: "Dec 29, 2024",
    tasks: ["Practic, practic, practice!", "Learn advanced concepts"],
  },
  {
    id: "d2",
    title: "Mastering React",
    description: "Master React until the top.",
    date: "Feb 12, 2024",
    tasks: ["Master by practicing!", "Master advanced concepts"],
  },
];

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
      <NavBar
        onAdd={handleAddProject}
        onOpenProject={handleOpenProject}
        items={DUMMY_ITEMS}
      />
      {mainPage.homePage && <HomePage onAdd={handleAddProject} />}
      {mainPage.newProject && <NewProject />}
      {mainPage.projectItem && <ProjectItem />}
    </div>
  );
}

export default App;
