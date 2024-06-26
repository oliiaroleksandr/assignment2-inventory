import { Moon, SunOutline } from "@/icons";
import { useTheme } from "@/components/ThemeProvider";
import { Switch } from "@/components/ui";

const ModeSwitch = () => {
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
        className="cursor-pointer font-semibold leading-[1.5] text-muted-foreground"
      >
        Mode
      </label>
      <Switch
        id="mode-toggle"
        checked={theme === "light"}
        onCheckedChange={handleChackedChange}
      >
        {theme === "light" ? <SunOutline /> : <Moon />}
      </Switch>
    </div>
  );
};

export default ModeSwitch;
