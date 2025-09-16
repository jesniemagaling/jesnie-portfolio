import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-primary-light dark:bg-primary-dark">
      <main className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col">
        {children}
      </main>
    </div>
  );
}
