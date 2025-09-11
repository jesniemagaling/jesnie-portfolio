import { useEffect, useState } from "react";
import { Github, Sun, Moon, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Sync state with localStorage (so it remembers preference)
  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  return (
    <nav className="flex items-center justify-between bg-[#0A0E17] px-8 py-4 text-gray-300">
      <div className="flex items-center">
        <div className="w-[36px]">
          <img src="/icons/dark-logo.png" alt="jesnie-icon" />
        </div>
      </div>

      <ul className="hidden gap-8 text-sm font-medium md:flex">
        <li>
          <a href="#stack" className="hover:text-white">
            Stack
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-white">
            Projects
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-white">
            About
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-white">
            Contact
          </a>
        </li>
      </ul>

      <div className="hidden items-center space-x-4 border-l border-gray-800 pl-4 md:flex">
        <a
          href="https://github.com/jesniemagaling"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white md:h-6 md:w-6" />
        </a>
        <button onClick={toggleDarkMode}>
          {darkMode ? (<Sun className="text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white md:h-6 md:w-6" />) : (<Moon className="text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white md:h-6 md:w-6" />)}
        </button>
      </div>

      <button
        className="hover:text-white md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-14 z-10 w-full md:hidden">
          <ul className="flex flex-col space-y-4 px-10 py-6 text-sm text-gray-300">
            <li>
              <a href="#stack" className="hover:text-white">
                Stack
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-white">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4 px-10 pb-6 pt-2">
            <a
              href="https://github.com/jesniemagaling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white" />
            </a>
            <button onClick={toggleDarkMode}>
          {darkMode ? (<Sun className="text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white md:h-6 md:w-6" />) : (<Moon className="text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white md:h-6 md:w-6" />)}
        </button>
          </div>
        </div>
      )}
    </nav>
  );
}
