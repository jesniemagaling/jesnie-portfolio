import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative mx-auto flex h-full flex-col">
      <main className="flex-1 overflow-y-auto p-4 pb-20 md:px-8">
        {children}
      </main>
    </div>
  );
}
