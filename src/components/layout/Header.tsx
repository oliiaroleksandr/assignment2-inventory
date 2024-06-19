import { HardDrivesOutline, SquaresFourOutline } from "@/icons";
import { ToggleGroup, ToggleGroupItem } from "../ui";

const Header = () => {
  return (
    <header className="fixed left-[22.5rem] right-0 top-0 border-b border-border2 bg-background1 px-8 py-5">
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
