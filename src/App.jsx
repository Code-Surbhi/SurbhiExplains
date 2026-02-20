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

function Home() {
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
