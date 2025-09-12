import { useMemo, useState } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";

function App() {
  // state for dark/light
  const [mode, setMode] = useState<"light" | "dark">("light");

  // memoized theme so it only recalculates when `mode` changes
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: mode === "dark" ? "#242424" : "rgba(133, 133, 133, 0.7)",
          },
          secondary: {
            main: mode === "dark" ? "#ffffff" : "#000000",
          },
        },
        typography: {
          fontFamily: ["Inter", "sans-serif"].join(","),
        },
      }),
    [mode],
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* resets styles according to theme */}
      <div className="min-h-screen bg-white font-sans text-primary-light dark:bg-primary-light dark:text-primary-dark">
        <Navbar mode={mode} setMode={setMode} /> {/* pass toggle down */}
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
    </ThemeProvider>
  );
}

export default App;
