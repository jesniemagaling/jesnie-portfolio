import { useState } from 'react';
import { Github, Moon, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0A0E17] text-gray-300">
      {/* Left Logo */}
      <div className="flex items-center">
        <div className="w-[36px]">
          <img src="/icons/dark-logo.png" alt="jesnie-icon" />
        </div>
      </div>

      {/* Middle Links */}
      <ul className="hidden md:flex gap-8 text-sm font-medium">
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
      <div className="hidden md:flex items-center space-x-4 border-l border-gray-800 pl-4">
        {/* GitHub Icon */}
        <a
          href="https://github.com/jesniemagaling"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github className="md:w-6 md:h-6 text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white" />
        </a>

        {/* Dark Mode Toggle */}
        <button>
          <Moon className="md:w-6 md:h-6 text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white" />
        </button>
      </div>

      <button
        className="md:hidden hover:text-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-14 left-0 w-full bg-[#090d18] md:hidden z-10">
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
              <Github className="w-5 h-5 text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white" />
            </a>
            <button>
              <Moon className="w-5 h-5 text-gray-400 hover:text-white dark:text-gray-200 dark:hover:text-white" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
