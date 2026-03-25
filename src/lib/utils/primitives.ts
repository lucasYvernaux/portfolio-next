import { tv } from "tailwind-variants/lite";

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
