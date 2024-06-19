import { SignOutOutline } from "@/icons";

const Sidebar = () => {
  return (
    <aside className="bg-background2 fixed left-0 top-0 h-full w-20 px-4 pb-8 pt-20">
      <div className="flex h-full flex-col items-center border-t border-[#2020244D] pt-4 dark:border-[#484851]">
        <div className="grow">
          <button className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#EDDF65] text-[1.75rem] font-bold uppercase text-[#CECECB] dark:bg-[#5d5509]">
            H
          </button>
          <button className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[#DDDDDD] text-[2.3rem] font-bold uppercase text-[#CECECB] dark:bg-[#404040]">
            <span className="-mt-[8.5px]">+</span>
          </button>
        </div>
        <SignOutOutline />
      </div>
    </aside>
  );
};

export default Sidebar;
