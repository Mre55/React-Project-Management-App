import NavBar from "./components/NavBar";
import noProjects from './assets/no-projects.png';

function App() {
  return (
    <div className="relative min-h-screen">
      <section className="absolute top-1/4 left-2/3">
        <img src={noProjects} alt="no-projects" className="h-24" />
        <h2>No Project Selected</h2>
        <p>No Project Selected</p>
        <button>Create new project</button>
      </section>
      {/* position: absolute;
  top: 50%;
  left: 50%;
  margin: -25px 0 0 -25px; */}
      <NavBar />
    </div>
  );
}

export default App;
