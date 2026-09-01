import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "outline",
        "secondary",
        "link",
        "destructive",
        "ghost",
      ],
    },
    size: {
      control: "select",
      options: ["mini", "short", "small", "base", "large"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

// Cas "action" : onClick obligatoire, pas de navigation
export const Default: Story = {
  args: {
    children: "Envoyer",
    variant: "default",
    size: "base",
    onClick: () => {},
  },
};

export const Outline: Story = {
  args: { ...Default.args, variant: "outline" },
};

export const Secondary: Story = {
  args: { ...Default.args, variant: "secondary" },
};

export const Destructive: Story = {
  args: { ...Default.args, variant: "destructive" },
};

export const Disabled: Story = {
  args: { ...Default.args, disabled: true },
};

// Cas "navigation" : href obligatoire, passe par le Link i18n
// (@/i18n/routing) — vérifie que le provider next-intl est bien
// branché dans preview.tsx pour que ça ne plante pas.
export const AsLink: Story = {
  args: {
    children: "Voir les tarifs",
    href: "/pricing",
    variant: "default",
  },
};
