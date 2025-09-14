import { useMemo, useState, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import MainLayout from "./layouts/MainLayout";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Stack from "./components/Stack";
import { Toaster } from "react-hot-toast";

function App() {
  const [mode, setMode] = useState<"light" | "dark">(
    (localStorage.getItem("theme") as "light" | "dark") || "light",
  );

  useEffect(() => {
    localStorage.setItem("theme", mode);

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

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
    <MainLayout>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* resets styles according to theme */}
        <Navbar mode={mode} setMode={setMode} />
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
        <Toaster
          position="top-right"
          toastOptions={{
            className:
              "bg-primary-light text-black dark:bg-primary-dark dark:text-white",
          }}
        />
      </ThemeProvider>
    </MainLayout>
  );
}

export default App;
