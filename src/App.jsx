import NavBar from "./components/NavBar";
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";

function App() {
  return (
    <div className="relative min-h-screen">
      {/* <NoProject /> */}
      <NewProject />
      <NavBar />
    </div>
  );
}

export default App;
