interface SectionHeaderProps {
  title: String;
  description?: String;
}

export default function SectionHeader({
  title,
  description,
}: SectionHeaderProps) {
  return (
    <>
      <div className="text-center md:text-left">
        <h1 className="text-[28px] font-bold md:text-[32px] lg:text-4xl">
          {title}
        </h1>
        <p className="text-sm opacity-80 dark:opacity-70 md:text-xl">
          {description}
        </p>
      </div>
    </>
  );
}
