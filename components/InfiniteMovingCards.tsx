"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    icon: string; // Only keep the 'icon' property for the image URL
    name: string; // Include the name property to display the app name
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (scrollerRef.current) {
      if (direction === "left") {
        scrollerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        scrollerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (scrollerRef.current) {
      if (speed === "fast") {
        scrollerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        scrollerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        scrollerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <ul
      ref={scrollerRef}
      className={cn(
        "flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap",
        start && "animate-scroll ",
        pauseOnHover && "hover:[animation-play-state:paused]",
        className
      )}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          className="w-[70vw] max-w-[300px] relative rounded-xl border border-slate-800 p-4 md:p-8 flex flex-col items-center justify-center"
          style={{
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          {/* Render only the integration icon */}
          <div className="flex items-center justify-center mb-4">
            <img
              src={item.icon} // The 'icon' is expected to be an image URL
              alt="Integration Icon"
              className="w-12 h-12 object-contain"
            />
          </div>
          {/* Display the app name */}
          <span className="text-white text-center text-sm">{item.name}</span>
        </li>
      ))}
    </ul>
  );
};
