import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Cursor from "./components/Cursor";
import useReveal from "./hooks/useReveal";
import TechMarquee from "./components/TechMarquee";

function App() {
  useReveal();

  return (
    <>
      <Cursor />
      <Navbar />

      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

export default App;
