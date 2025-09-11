import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Stack from './components/Stack';

function App() {
  return (
    <div className="font-sans text-primary-light dark:text-white bg-white dark:bg-primary-light">
      <Navbar />
      <main>
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="stack">
          <Stack />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
