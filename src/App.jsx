import { useState } from "react";

import ProjectsSidebar from "./components/ProjectsSideBar";
import HomePage from "./components/HomePage";
import NewProject from "./components/NewProject";
import ProjectItem from "./components/ProjectItem";
import { DUMMY_ITEMS } from "./util/data";

function App() {
  const [items, setItems] = useState(DUMMY_ITEMS);

  const [mainPage, setMainPage] = useState({
    homePage: true,
    newProject: false,
    projectItem: [],
  });

  const handleNewProject = ({ id, title, description, date }) => {
    setItems((prevItems) => {
      return [...prevItems, { id, title, description, date }];
    });
  };

  const handleAddProject = () => {
    console.log("add project clicked!", mainPage.newProject);
    setMainPage({ newProject: true });
    // setMainPage((prevPage) => {
    //   return { ...!prevPage, newProject: true };
    // });
  };

  const handleOpenProject = (id) => {
    const openFilteredItem = items.filter((item) => item.id === id);

    setMainPage({ projectItem: openFilteredItem });
    setSelectedProjectId(id);
  };

  return (
    <main className="min-h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onAdd={handleAddProject}
        onOpenProject={handleOpenProject}
        items={items}
      />
      <NewProject />
      {/* {mainPage.homePage && <HomePage onAdd={handleAddProject} />}
      {mainPage.newProject && <NewProject onSave={handleNewProject} />}

      <ProjectItem items={mainPage.projectItem} /> */}
    </main>
  );
}

export default App;
