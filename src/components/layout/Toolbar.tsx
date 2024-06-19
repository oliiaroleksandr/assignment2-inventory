import { Buildings, FolderOpenOutline, PackageOutline } from "@/icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../ui";
import ModeToggle from "./ModeToggle";

const Toolbar = () => {
  return (
    <div className="bg-background3 fixed left-20 top-0 flex h-full w-[17.56rem] flex-col px-6 pb-[2.125rem] pt-7">
      <h2 className="mb-6 text-[1.25rem] font-bold leading-[1.2]">Hudson 8</h2>
      <Tabs defaultValue="project" className="grow">
        <TabsList className="w-full">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="project">Project</TabsTrigger>
        </TabsList>
        <TabsContent value="general">General</TabsContent>
        <TabsContent value="project">
          <Accordion type="single" collapsible className="mb-6">
            <AccordionItem value="project">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <FolderOpenOutline />
                  Project Management
                </div>
              </AccordionTrigger>
              <AccordionContent>Project Management</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="mb-6 flex items-center gap-3 font-semibold leading-[1.5] text-muted-foreground">
            <Buildings />
            Buildings
          </div>
          <Accordion type="single" collapsible>
            <AccordionItem value="project">
              <AccordionTrigger>
                <div className="flex items-center gap-3">
                  <PackageOutline />
                  Inventory
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="ml-2.5 border-l-[1.5px] pl-[0.8rem]">
                  <div className="mb-1 rounded-lg bg-secondary px-3 py-2.5 font-medium leading-[1.5]">
                    Units inventory
                  </div>
                  <div className="px-3 py-2.5">Allocations</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
      <ModeToggle />
    </div>
  );
};

export default Toolbar;
