"use client";

import { useTheme } from "@/src/hooks/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export default function SwitchTheme() {
  const { isDark, toggleTheme, isMounted } = useTheme();

  if (!isMounted) {
    return (
      <div
        className="h-9 w-9 rounded-md border border-border"
        aria-hidden="true"
      ></div>
    );
  }
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-background border border-foreground cursor-pointer"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {!isDark ? (
        <Moon className="text-blue-400" />
      ) : (
        <Sun className="text-yellow-500" />
      )}
    </button>
  );
}
