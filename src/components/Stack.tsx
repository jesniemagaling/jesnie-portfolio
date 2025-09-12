import SectionHeader from "./SectionHeader";
import { PrimaryButton, SecondaryButton } from "./CustomButtons";

export default function Stack() {
  return (
    <>
      <SectionHeader
        title={"Tech Stack"}
        description={
          "These are the technologies, frameworks, and tools I use to bring ideas to life, covering everything from frontend to backend development."
        }
      />
      <div className="mb-8 mt-4 space-x-2">
        <PrimaryButton>All</PrimaryButton>
        <SecondaryButton>Front-End</SecondaryButton>
        <SecondaryButton>Back-End</SecondaryButton>
        <SecondaryButton>Database</SecondaryButton>
        <SecondaryButton>DevOps</SecondaryButton>
        <SecondaryButton>Tools</SecondaryButton>
      </div>
    </>
  );
}
