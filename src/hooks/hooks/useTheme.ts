// hooks/useTheme.ts
"use client";

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark" | "system";

interface UseThemeReturn {
  theme: Theme;
  resolvedTheme: "light" | "dark" | undefined;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isMounted: boolean;
}

const subscribe = () => () => {};

export function useTheme(): UseThemeReturn {
  const { theme, resolvedTheme, setTheme } = useNextTheme();

  const isMounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return {
    theme: (theme as Theme) ?? "system",
    resolvedTheme: resolvedTheme as "light" | "dark" | undefined,
    setTheme,
    toggleTheme,
    isDark: resolvedTheme === "dark",
    isMounted,
  };
}
