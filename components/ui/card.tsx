import * as React from "react";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`border rounded-lg shadow p-4 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="p-4">{children}</div>;
}

export function CardDescription({ children }: { children: React.ReactNode }) {
  return <p className="text-gray-600">{children}</p>;
}

export function CardFooter({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="">{children}</div>;
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}
