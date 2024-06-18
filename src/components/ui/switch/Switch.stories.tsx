import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import { useState } from "react";
import { SunOutline } from "@/icons";
import { MoonIcon } from "lucide-react";

const SwitchPreview = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <Switch checked={isChecked} onCheckedChange={setIsChecked}>
      {isChecked ? <SunOutline /> : <MoonIcon size={17} />}
    </Switch>
  );
};

const meta: Meta<typeof SwitchPreview> = {
  title: "Ui/Switch",
  component: SwitchPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SwitchPreview>;

export const Default: Story = {};
