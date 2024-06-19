import type { Meta, StoryObj } from "@storybook/react";
import { ToggleGroup, ToggleGroupItem } from "./ToggleGroup";
import { SquaresFourOutline, HardDrivesOutline } from "@/icons";

const ToggleGroupPreview = () => {
  return (
    <ToggleGroup type="single" defaultValue="2" className="z-10">
      <ToggleGroupItem value="1">
        <SquaresFourOutline />
      </ToggleGroupItem>
      <ToggleGroupItem value="2">
        <HardDrivesOutline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

const meta: Meta<typeof ToggleGroupPreview> = {
  title: "Ui/ToggleGroup",
  component: ToggleGroupPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ToggleGroupPreview>;

export const Default: Story = {};
