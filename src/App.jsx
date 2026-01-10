import useReveal from "./hooks/useReveal";
import Spotlight from "./components/Spotlight";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import About from "./components/About";
import Projects from "./components/Projects";
import Connect from "./components/Connect";

function App() {
  useReveal();

  return (
    <>
      <TechStrip />
      <Spotlight />
      <Hero />  
      <About />
      <Projects />
      <Connect />
    </>
  );
}

export default App;
