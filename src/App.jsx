import { useState } from "react";

import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NewProject from "./components/NewProject";
import ProjectItem from "./components/ProjectItem";

const DUMMY_ITEMS = [
  {
    id: "d1",
    title: "Learning React",
    description:
      "Learn React from the group up. Start with the basics, finish with advanced knowledge.",
    date: "Dec 29, 2024",
    tasks: [
      {
        id: "t1",
        title: "Practic, practic, practice!",
      },
      {
        id: "t2",
        title: "Learn advanced concepts",
      },
      {
        id: "t3",
        title: "Twice practic, practic, practice!",
      },
    ],
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
