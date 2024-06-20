import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui";
import { UnitStatus } from "./types";
import { useTheme } from "../ThemeProvider";
import { getStatusColor } from "./utils";

const statuses: UnitStatus[] = [
  "Available",
  "Reserved",
  "Offer",
  "Accepted",
  "Sold",
  "Sold firm",
];

const Heading = () => {
  const { theme } = useTheme();

  return (
    <div className="rounded-t-[0.625rem] bg-[#e7e8eb] p-6 dark:bg-[#272725]">
      <div className="flex items-center justify-between">
        <Select defaultValue="value1">
          <SelectTrigger className="w-[12.5rem]">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="value1">Pacifica Tower 1</SelectItem>
            <SelectItem value="value2">Pacifica Tower 2</SelectItem>
            <SelectItem value="value3">Pacifica Tower 3</SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center gap-3 text-[#202024]">
          {statuses.map((status) => {
            const color = getStatusColor(status, theme);

            return (
              <div
                key={status}
                style={{ backgroundColor: color }}
                className="rounded-lg text-foreground border px-4 py-2 text-[0.8125rem]"
              >
                {status}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Heading;
