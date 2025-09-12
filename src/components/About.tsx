import SectionHeader from "./SectionHeader";

export default function About() {
  return (
    <div className="flex gap-[84px]">
      <div className="max-w-[655px]">
        <SectionHeader title={"About Me"} />
        <p className="mb-2 mt-6 text-lg opacity-80 dark:opacity-70 md:text-xl">
          I’m Jesnie Magaling, 21 years old, from Bulacan, and currently taking
          up BS in Information Technology at La Consolacion University
          Philippines. I’m a full-stack developer who can build web
          applications, from user interfaces to servers and databases, using
          modern technologies. Recently, I’ve also started exploring artificial
          intelligence engineering.{" "}
        </p>
        <p className="mb-6 text-lg opacity-80 dark:opacity-70 md:text-xl">
          I enjoy learning new technologies, tackling challenges, and keeping up
          with the latest trends in development. I’m currently looking for a
          professional role where I can apply my skills, grow as a developer,
          and contribute to meaningful projects. If you’re looking for a
          full-stack web developer, feel free to reach out.{" "}
        </p>
        <div>
          <h2 className="text-2xl font-bold md:text-3xl lg:text-[32px]">
            My Goal
          </h2>
          <p className="mt-2 text-lg opacity-80 dark:opacity-70 md:text-xl">
            To work in a team that creates responsive web applications and
            AI-powered solutions that can make a real difference in tech
            communities and organizations.
          </p>
        </div>
      </div>
      <div className="">
        <SectionHeader title={"Education"} />
        <div>
          <h2 className="mt-5 text-xl font-semibold md:text-2xl">
            La Consolacion University Philippines
          </h2>
          <p className="mb-4 mt-2 text-lg opacity-80 dark:opacity-70 md:text-xl">
            Bachelor of Science in Information Technology
          </p>
          <h3 className="text-lg font-medium opacity-80 dark:opacity-70 md:text-xl">
            2022 - 2026
          </h3>
        </div>
        <div>
          <h2 className="mt-4 text-xl font-semibold md:text-2xl">
            La Consolacion University Philippines
          </h2>
          <p className="mb-4 mt-2 text-lg opacity-80 dark:opacity-70 md:text-xl">
            Senior High School
          </p>
          <h3 className="text-lg font-medium opacity-80 dark:opacity-70 md:text-xl">
            2020 - 2022
          </h3>
        </div>
      </div>
    </div>
  );
}
