import { cn } from "@/lib/utils";
import { useToolbar } from "../ToolbarProvider";
import LayoutToggle from "./LayoutToggle";

const Header = () => {
  const { isOpen } = useToolbar();

  return (
    <header className="fixed left-0 top-0 z-10 w-full border-b border-border2 bg-background1 px-8 py-5">
      <div
        className={cn(
          "transition-padding flex items-center justify-between",
          isOpen ? "pl-[22.5rem]" : "pl-20",
        )}
      >
        <h1 className="text-[1.375rem] font-bold leading-[1.27]">
          Units Inventory
        </h1>
        <LayoutToggle />
      </div>
    </header>
  );
};

export default Header;
