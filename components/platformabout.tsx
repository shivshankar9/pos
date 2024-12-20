import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set a flag once the component is mounted on the client
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-white">
            {isClient ? "The next-gen " : "The future of "}
          </span>
          <span className="text-purple">automated business solutions</span>
          <br />
          <span className="text-white">
            designed for tomorrow&apos;s leaders
          </span>
        </h1>
        <div className="space-y-4">
          <div className="flex items-center gap-x-4">
            <span className="text-slate-500 text-lg">
              With our platform, you can:
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          <div className="flex flex-wrap gap-6 text-lg font-medium">
            <span className="text-white">Supercharge Payments</span>
            <span className="text-white">Instantly Deploy Payouts</span>
            <span className="text-white">Seamlessly Manage Operations</span>
            <span className="text-white">Empower Teams with AI Automation</span>
            <span className="text-white">
              Unlock Credit & Financing with Ease
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
