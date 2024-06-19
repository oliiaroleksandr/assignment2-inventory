import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui";
import { Buildings, FolderOpenOutline, PackageOutline } from "@/icons";

const ToolbarMenu = () => {
  return (
    <div className="flex flex-col gap-6">
      <Accordion type="single" collapsible>
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
      <div className="flex items-center gap-3 font-semibold leading-[1.5] text-muted-foreground">
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
    </div>
  );
};

export default ToolbarMenu;
