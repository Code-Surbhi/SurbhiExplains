import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Certifications from "./components/Certifications/Certifications";
import Devlog from "./components/Devlog/Devlog";
import Notes from "./components/Notes/Notes";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import BackToTop from "./components/BackToTop/BackToTop";
import ReadingProgressBar from "./components/ReadingProgressBar/ReadingProgressBar";
import Experience from "./components/Experience/Experience";
import Education from "./components/Education/Education";
import CommandPalette from "./components/CommandPalette/CommandPalette";

import { useState, useEffect } from "react";

function Home() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        setPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <main>
      <CommandPalette
        isOpen={paletteOpen}
        onClose={() => setPaletteOpen(false)}
      />
      <ReadingProgressBar />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Devlog />
      <Notes />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <NotFound />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
