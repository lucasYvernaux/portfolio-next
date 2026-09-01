import type { Preview } from "@storybook/nextjs-vite";
import { NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "../src/components/providers/theme-provider";
import { frMessages } from "./message";
import "../src/app/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
  },
  decorators: [
    (Story) => (
      <NextIntlClientProvider locale="fr" messages={frMessages}>
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      </NextIntlClientProvider>
    ),
  ],
};

export default preview;
