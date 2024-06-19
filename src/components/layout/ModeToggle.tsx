import { SunOutline } from "@/icons";
import { useTheme } from "../ThemeProvider";
import { Switch } from "@/components/ui";
import { MoonIcon } from "lucide-react";

const ModeToggle = () => {
  const { setTheme, theme } = useTheme();

  const handleChackedChange = (isChecked: boolean) => {
    if (isChecked) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="flex items-center justify-between">
      <label
        htmlFor="mode-toggle"
        className="font-semibold leading-[1.5] text-[#4F4F4F]"
      >
        Mode
      </label>
      <Switch
        id="mode-toggle"
        checked={theme === "light"}
        onCheckedChange={handleChackedChange}
      >
        {theme === "light" ? <SunOutline /> : <MoonIcon size={17} />}
      </Switch>
    </div>
  );
};

export default ModeToggle;
