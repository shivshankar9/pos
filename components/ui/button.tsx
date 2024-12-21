import * as React from "react";

export function Button({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}
