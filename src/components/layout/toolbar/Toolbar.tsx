import ToolbarTabs from "./ToolbarTabs";
import ModeSwitch from "./ModeSwitch";

const Toolbar = () => {
  return (
    <div className="bg-background3 fixed left-20 top-0 flex h-full w-[17.56rem] flex-col px-6 pb-[2.125rem] pt-7">
      <h2 className="mb-6 text-[1.25rem] font-bold leading-[1.2]">Hudson 8</h2>
      <div className="grow">
        <ToolbarTabs />
      </div>
      <ModeSwitch />
    </div>
  );
};

export default Toolbar;
