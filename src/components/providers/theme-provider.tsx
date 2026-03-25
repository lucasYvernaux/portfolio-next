import {
  ThemeProviderProps,
  ThemeProvider as NextThemProvider,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemProvider>
  );
}
