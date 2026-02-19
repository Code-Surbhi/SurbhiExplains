import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import About from "./components/About/About";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
    </main>
  );
}

export default App;
