import "./App.css";
import About from "./components/about/About";
import Experiences from "./components/experiences/Experiences";
import Intro from "./components/intro/Intro";
import LeftSidebar from "./components/sidebar/LeftSidebar";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <div className="container">
      {/* Create a static link sidebar */}
      <LeftSidebar />
      <div className="container-width">
        <Intro />
        <About />
        <Projects />
        <Experiences />
      </div>
    </div>
  );
}

export default App;
