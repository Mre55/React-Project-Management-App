import NavBar from "./components/NavBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import ProjectItem from "./components/ProjectItem";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* <NoProject /> */}
      {/* <NewProject /> */}
      <ProjectItem />
      <NavBar />
    </div>
  );
}

export default App;
