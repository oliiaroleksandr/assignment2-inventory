import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "./Toggle";
import { SquaresFourOutline } from "@/icons";

const TogglePreview = () => {
  return (
    <Toggle>
      <SquaresFourOutline />
    </Toggle>
  );
};

const meta: Meta<typeof TogglePreview> = {
  title: "Ui/Toggle",
  component: TogglePreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TogglePreview>;

export const Default: Story = {};
