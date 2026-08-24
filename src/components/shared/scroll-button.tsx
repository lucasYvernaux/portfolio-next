"use client";

import { ChevronDown } from "lucide-react";

export default function ScrollButton({ targetId }: { targetId: string }) {
  const handleClick = () => {
    document
      .getElementById(targetId)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      onClick={handleClick}
      className="w-full relative top-10 cursor-pointer flex flex-col items-center justify-center text-gray-500 text-sm uppercase tracking-widest"
    >
      découvrir
      <ChevronDown
        color="var(--color-primary)"
        className="animate-bounce mt-4"
      />
    </div>
  );
}
