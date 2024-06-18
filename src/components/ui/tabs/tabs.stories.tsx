import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./Tabs";

const TabsPreview = () => {
  return (
    <Tabs defaultValue="general" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="project">Project</TabsTrigger>
      </TabsList>
      <TabsContent value="general">General</TabsContent>
      <TabsContent value="project">Project</TabsContent>
    </Tabs>
  );
};

const meta: Meta<typeof TabsPreview> = {
  title: "Ui/Tabs",
  component: TabsPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TabsPreview>;

export const Default: Story = {};
