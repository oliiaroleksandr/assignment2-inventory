import { HardDrivesOutline, SquaresFourOutline } from "@/icons";
import { ToggleGroup, ToggleGroupItem } from "../ui";

const Header = () => {
  return (
    <header className="left-[22.5rem] fixed top-0 right-0 border-b border-[#ECEDF0] px-8 py-5 bg-background ">
      <div className="flex items-center justify-between">
        <h1 className="text-[1.375rem] font-bold leading-[1.27]">
          Units Inventory
        </h1>
        <ToggleGroup type="single" defaultValue="2" className="z-10">
          <ToggleGroupItem value="1">
            <SquaresFourOutline />
          </ToggleGroupItem>
          <ToggleGroupItem value="2">
            <HardDrivesOutline />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </header>
  );
};

export default Header;
