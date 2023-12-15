import NavBar from "./components/NavBar";
import NewProject from "./components/NewProject";
import HomePage from "./components/HomePage";
import ProjectItem from "./components/ProjectItem";

function App() {
  return (
    <div className="relative min-h-screen">
      <NavBar />
      <HomePage />
      {/* <NewProject /> */}
      {/* <ProjectItem /> */}
    </div>
  );
}

export default App;
