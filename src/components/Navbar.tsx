import { Github, Sun, Moon, Menu, X } from "lucide-react";
import type { SetStateAction } from "react";
import type { Dispatch } from "react";

interface NavbarProps {
  mode: "light" | "dark";
  setMode: Dispatch<SetStateAction<"light" | "dark">>;
}

export default function Navbar({ mode, setMode }: NavbarProps) {
  const toggleDarkMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);

    // update Tailwind class
    document.documentElement.classList.toggle("dark", newMode === "dark");

    // remember choice
    localStorage.setItem("theme", newMode);
  };

  return (
    <nav className="flex items-center justify-between bg-[#0A0E17] px-8 py-4 text-gray-300">
      <div className="flex items-center">
        <div className="w-[36px]">
          <img src="/icons/dark-logo.png" alt="jesnie-icon" />
        </div>
      </div>

      {/* Desktop menu */}
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

      {/* Icons */}
      <div className="hidden items-center space-x-4 border-l border-gray-800 pl-4 md:flex">
        <a
          href="https://github.com/jesniemagaling"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white md:h-6 md:w-6" />
        </a>
        <button onClick={toggleDarkMode}>
          {mode === "dark" ? (
            <Sun className="text-gray-400 hover:text-white md:h-6 md:w-6" />
          ) : (
            <Moon className="text-gray-400 hover:text-white md:h-6 md:w-6" />
          )}
        </button>
      </div>

      {/* Mobile menu button */}
      <button
        className="hover:text-white md:hidden"
        onClick={() => setMode(mode === "dark" ? "light" : "dark")}
      >
        {mode === "dark" ? (
          <X className="h-6 w-6" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </button>
    </nav>
  );
}
