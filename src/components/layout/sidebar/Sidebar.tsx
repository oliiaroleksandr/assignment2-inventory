import { SignOutOutline } from "@/icons";
import ToolbarToggle from "./ToolbarToggle";

const Sidebar = () => {
  return (
    <aside className="fixed left-0 top-0 z-30 h-full w-20 bg-background2 px-4 pb-8 pt-20">
      <div className="flex h-full flex-col items-center border-t border-[#2020244D] pt-4 dark:border-[#484851]">
        <div className="grow">
          <button className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#EDDF65] text-[1.75rem] font-bold uppercase text-background2 dark:bg-[#8b7f0e]">
            H
          </button>
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#DDDDDD] text-[1.8rem] font-bold uppercase text-background2 dark:bg-[#404040]">
            <span className="-mt-[7px]">+</span>
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <ToolbarToggle />
          <SignOutOutline />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
