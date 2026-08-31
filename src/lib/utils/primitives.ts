import { tv } from "tailwind-variants/lite";

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const heading = tv({
  base: "font-serif font-bold mb-6",
  variants: {
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      foreground: "text-foreground",
    },
    size: {
      xs: "text-2xl md:3xl",
      sm: "text-3xl md:text-5xl",
      base: "text-4xl md:text-6xl",
      lg: "text-5xl md:text-7xl",
    },
  },
  defaultVariants: {
    size: "base",
    color: "foreground",
  },
});

export const text = tv({
  base: "tracking-normal",
  variants: {
    color: {
      foreground: "text-foreground",
      primary: "text-primary",
      secondary: "text-secondary",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      base: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "3xl": "text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "lg",
    weight: "normal",
    color: "foreground",
  },
});

export const button = tv({
  base: "group flex w-full items-center justify-center gap-2 mt-4 rounded-lg tracking-wider uppercase  transition-all duration-300 disabled:pointer-events-none disabled:opacity-50",
  variants: {
    variant: {
      default: "bg-primary text-background px-8 py-4 hover:bg-primary/80",
      ghost: "p-0 font-normal",
      secondary:
        "bg-zinc-900 text-zinc-100 px-8 py-4 border border-zinc-700 hover:border-primary",
      outline:
        "border border-primary text-primary px-8 py-4 hover:bg-primary hover:text-background",
      link: "text-secondary underline-offset-4 hover:underline hover:text-primary",
      destructive:
        "bg-destructive/10 text-destructive px-8 py-4 hover:bg-destructive/20",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    weight: "bold",
    variant: "default",
  },
});
