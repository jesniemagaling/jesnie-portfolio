import SectionHeader from "./SectionHeader";
import { PrimaryButton, SecondaryButton } from "./CustomButtons";
import { useState } from "react";

const categories = [
  "All",
  "Front-End",
  "Back-End",
  "Database",
  "DevOps",
  "Tools",
];

const stackItems = [
  {
    name: "Javascript",
    icon: "/icons/js.svg",
    category: "Front-End",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "Typescript",
    icon: "/icons/ts.svg",
    category: "Front-End",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: "/icons/react.svg",
    category: "Front-End",
    link: "https://react.dev/",
  },
  {
    name: "Next.js",
    icon: "/icons/next.svg",
    category: "Front-End",
    link: "https://nextjs.org/",
  },
  {
    name: "Node.js",
    icon: "/icons/node.svg",
    category: "Back-End",
    link: "https://nodejs.org/",
  },
  {
    name: "Express.js",
    icon: "/icons/express.svg",
    category: "Back-End",
    link: "https://expressjs.com/",
  },
  {
    name: "Nest.js",
    icon: "/icons/nest.svg",
    category: "Back-End",
    link: "https://nestjs.com/",
  },
  {
    name: "Socket.io",
    icon: "/icons/socket.svg",
    category: "Back-End",
    link: "https://socket.io/",
  },
  {
    name: "PostgreSQL",
    icon: "/icons/postgresql.svg",
    category: "Database",
    link: "https://www.postgresql.org/",
  },
  {
    name: "MongoDB",
    icon: "/icons/mongodb.svg",
    category: "Database",
    link: "https://www.mongodb.com/",
  },
  {
    name: "Sass/Scss",
    icon: "/icons/sass.svg",
    category: "Front-End",
    link: "https://sass-lang.com/",
  },
  {
    name: "TailwindCSS",
    icon: "/icons/tailwindcss.svg",
    category: "Front-End",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Figma",
    icon: "/icons/figma.svg",
    category: "Tools",
    link: "https://www.figma.com/",
  },
  {
    name: "Cypress",
    icon: "/icons/cypress.svg",
    category: "Tools",
    link: "https://www.cypress.io/",
  },
  {
    name: "Storybook",
    icon: "/icons/storybook.svg",
    category: "Tools",
    link: "https://storybook.js.org/",
  },
  {
    name: "Git",
    icon: "/icons/git.svg",
    category: "DevOps",
    link: "https://git-scm.com/",
  },
];

export default function Stack() {
  const [selected, setSelected] = useState("All");
  const filtered =
    selected === "All"
      ? stackItems
      : stackItems.filter((item) => item.category === selected);

  return (
    <>
      <SectionHeader
        title={"Tech Stack"}
        description={
          "These are the technologies, frameworks, and tools I use to bring ideas to life, covering everything from frontend to backend development."
        }
      />
      <div className="mb-10 mt-5 flex flex-wrap gap-2">
        {categories.map((cat) =>
          selected === cat ? (
            <PrimaryButton key={cat} onClick={() => setSelected(cat)}>
              {cat}
            </PrimaryButton>
          ) : (
            <SecondaryButton key={cat} onClick={() => setSelected(cat)}>
              {cat}
            </SecondaryButton>
          ),
        )}
      </div>
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
        {filtered.map((tech) => (
          <a
            key={tech.name}
            href={tech.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center space-y-2 px-2 py-4 shadow-sm dark:border-gray-700"
          >
            <img
              className="transition hover:scale-105"
              src={tech.icon}
              alt={tech.name}
            />
            <p className="text-sm font-medium md:text-lg">{tech.name}</p>
          </a>
        ))}
      </div>
    </>
  );
}
