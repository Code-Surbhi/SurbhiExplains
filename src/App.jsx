import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Devlog from "./components/Devlog/Devlog";
import Notes from "./components/Notes/Notes";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Devlog />
      <Notes />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
