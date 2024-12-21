import * as React from "react";

export function Tabs({ children }: { children: React.ReactNode }) {
  return <div className="flex border-b">{children}</div>;
}

export function TabsList({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>;
}

export function TabsTrigger({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="px-4 py-2 text-blue-600 border-b-2 border-transparent hover:border-blue-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
