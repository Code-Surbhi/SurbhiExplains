import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Devlog from "./components/Devlog/Devlog";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Devlog />
    </main>
  );
}

export default App;
