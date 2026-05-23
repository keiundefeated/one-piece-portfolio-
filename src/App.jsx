import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import CustomCursor from "./components/CustomCursor";

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onComplete={() => setLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen bg-ocean-dark text-white">
      <CustomCursor />
      <ParticleBackground count={35} />
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
