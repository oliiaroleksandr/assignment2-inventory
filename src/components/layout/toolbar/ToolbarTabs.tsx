import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui";
import ToolbarMenu from "./ToolbarMenu";

const ToolbarTabs = () => {
  return (
    <Tabs defaultValue="project">
      <TabsList className="w-full">
        <TabsTrigger value="general">General</TabsTrigger>
        <TabsTrigger value="project">Project</TabsTrigger>
      </TabsList>
      <TabsContent value="general">General</TabsContent>
      <TabsContent value="project">
        <ToolbarMenu />
      </TabsContent>
    </Tabs>
  );
};

export default ToolbarTabs;
