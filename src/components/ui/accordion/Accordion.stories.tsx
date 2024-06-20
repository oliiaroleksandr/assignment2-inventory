import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";
import {
  AccordionSingleProps,
  AccordionMultipleProps,
} from "@radix-ui/react-accordion";
import { FolderOpenOutline, PackageOutline } from "@/icons";

type Props = AccordionSingleProps | AccordionMultipleProps;

const AccordionPreview = (props: Props) => {
  return (
    <Accordion {...props} className="w-[233px]">
      <AccordionItem value="item-1" className="mb-6">
        <AccordionTrigger>
          <div className="flex items-center gap-3">
            <FolderOpenOutline />
            Project Management
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          delectus quasi ipsam atque sit odio iste autem ullam labore eligendi!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="flex items-center gap-3">
            <PackageOutline />
            Inverntory
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius
          delectus quasi ipsam atque sit odio iste autem ullam labore eligendi!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

const meta: Meta<typeof AccordionPreview> = {
  title: "Ui/Accordion",
  component: AccordionPreview,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AccordionPreview>;

export const Single: Story = {
  args: {
    type: "single",
    collapsible: false,
    defaultValue: "item-1",
  },
};

export const Multiple: Story = {
  args: {
    type: "multiple",
  },
};

export const Collapsible: Story = {
  args: {
    collapsible: true,
  },
};
