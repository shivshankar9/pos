import * as React from "react";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`px-2 py-1 text-sm font-semibold text-white bg-blue-600 rounded ${className}`}
    >
      {children}
    </span>
  );
}
