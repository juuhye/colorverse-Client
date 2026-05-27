import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Shared/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary 버튼",
    size: "medium",
  },
};

export const Secondary: Story = {
  args: {
    primary: false,
    label: "Secondary 버튼",
    size: "medium",
  },
};
