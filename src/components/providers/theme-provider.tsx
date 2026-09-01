import {
  ThemeProviderProps,
  ThemeProvider as NextThemProvider,
} from "next-themes";
import SwitchTheme from "../shared/toggle-dark-mode";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemProvider
      attribute={"class"}
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      storageKey="theme-preference"
      {...props}
    >
      {children}
      <div className="fixed bottom-4 right-4 z-50">
        <SwitchTheme />
      </div>
    </NextThemProvider>
  );
}
