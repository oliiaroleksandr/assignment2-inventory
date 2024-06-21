import { PropsWithChildren } from "react";
import { useToolbar } from "./ToolbarProvider";
import { cn } from "@/lib/utils";

const Main = ({ children }: PropsWithChildren) => {
  const { isOpen } = useToolbar();

  return (
    <main
      className={cn(
        "transition-padding pb-11 pr-8 pt-[6.875rem]",
        isOpen ? "pl-[24.5rem]" : "pl-28",
      )}
    >
      {children}
    </main>
  );
};

export default Main;
