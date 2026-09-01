import type { StorybookConfig } from "@storybook/nextjs-vite";
import path from "path";
import { fileURLToPath } from "url";

const dirname = path.dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/components/**/*.stories.@(ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-vitest",
    "@storybook/addon-a11y",
    "@storybook/addon-docs",
    "@storybook/addon-mcp",
  ],
  framework: { name: "@storybook/nextjs-vite", options: {} },
  staticDirs: ["../public"],

  async viteFinal(viteConfig) {
    viteConfig.resolve = viteConfig.resolve ?? {};
    viteConfig.resolve.alias = {
      ...(viteConfig.resolve.alias ?? {}),
      "@marsidev/react-turnstile": path.resolve(
        dirname,
        "./mocks/turnstile-mock.tsx",
      ),
    };
    return viteConfig;
  },
};

export default config;
