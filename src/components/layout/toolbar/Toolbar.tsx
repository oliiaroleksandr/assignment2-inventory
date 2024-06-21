import { cn } from "@/lib/utils";
import { useToolbar } from "../ToolbarProvider";
import ModeSwitch from "./ModeSwitch";
import ToolbarTabs from "./ToolbarTabs";

const Toolbar = () => {
  const { isOpen } = useToolbar();

  return (
    <div
      className={cn(
        "duration-300 fixed left-20 top-0 z-20 flex h-full w-[17.56rem] origin-left flex-col bg-background3 px-6 pb-[2.125rem] pt-7 transition-transform",
        isOpen
          ? "pointer-events-auto translate-x-0"
          : "pointer-events-none -translate-x-full",
      )}
    >
      <h2 className="mb-6 text-[1.25rem] font-bold leading-[1.2]">Hudson 8</h2>
      <div className="grow">
        <ToolbarTabs />
      </div>
      <ModeSwitch />
    </div>
  );
};

export default Toolbar;
