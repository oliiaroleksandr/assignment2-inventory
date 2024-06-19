import { HardDrivesOutline, SquaresFourOutline } from "@/icons";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui";

const LayoutToggle = () => {
  return (
    <ToggleGroup type="single" defaultValue="2" className="z-10">
      <ToggleGroupItem value="1">
        <SquaresFourOutline />
      </ToggleGroupItem>
      <ToggleGroupItem value="2">
        <HardDrivesOutline />
      </ToggleGroupItem>
    </ToggleGroup>
  );
};

export default LayoutToggle;
