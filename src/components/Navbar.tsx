import { Github, Sun, Moon, Menu, X } from "lucide-react";
import { useState, type SetStateAction } from "react";
import type { Dispatch } from "react";

interface NavbarProps {
  mode: "light" | "dark";
  setMode: Dispatch<SetStateAction<"light" | "dark">>;
}

export default function Navbar({ mode, setMode }: NavbarProps) {
  const toggleDarkMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);

    document.documentElement.classList.toggle("dark", newMode === "dark");

    localStorage.setItem("theme", newMode);
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-white px-4 py-3 dark:bg-primary-light md:px-8">
      <div className="flex items-center">
        <div className="w-[36px]">
          <img
            className="hidden dark:block"
            src="/icons/dark-logo.png"
            alt="jesnie-icon"
          />
          <img
            className="block dark:hidden"
            src="/icons/light-logo.png"
            alt="jesnie-icon"
          />
        </div>
      </div>

      {/* Desktop menu */}
      <ul className="hidden gap-8 text-sm font-semibold md:flex">
        <li>
          <a
            href="#stack"
            className="transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            Stack
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Icons */}
      <div className="hidden items-center space-x-4 border-l border-gray-300 pl-4 dark:border-gray-800 md:flex">
        <a
          href="https://github.com/jesniemagaling"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 md:h-6 md:w-6" />
        </a>
        <button onClick={toggleDarkMode}>
          {mode === "dark" ? (
            <Sun className="text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 md:h-6 md:w-6" />
          ) : (
            <Moon className="text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 md:h-6 md:w-6" />
          )}
        </button>
      </div>

      <button
        className="text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-14 z-10 w-full bg-white dark:bg-black md:hidden">
          <ul className="flex flex-col space-y-4 p-6 text-sm text-gray-300">
            <li>
              <a
                href="#stack"
                className="font-semibold text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                Stack
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="font-semibold text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="font-semibold text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="font-semibold text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center space-x-4 p-6 pt-2">
            <a
              href="https://github.com/jesniemagaling"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 md:h-6 md:w-6" />
            </a>
            <button onClick={toggleDarkMode}>
              {mode === "dark" ? (
                <Sun className="text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 md:h-6 md:w-6" />
              ) : (
                <Moon className="text-black transition-colors duration-100 hover:text-gray-700 dark:text-white dark:hover:text-gray-300 md:h-6 md:w-6" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
