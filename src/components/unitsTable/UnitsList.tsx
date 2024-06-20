import { unitsTable } from "./const";
import { getStatusColor } from "./utils";
import { useTheme } from "../ThemeProvider";
import Unit from "./Unit";

const UnitsList = () => {
  const theme = useTheme();

  return (
    <div className="flex flex-col gap-2">
      {Object.keys(unitsTable).reverse().map((key) => {
        const units = unitsTable[key as unknown as number];

        return (
          <div key={key} className="flex items-stretch gap-2">
            <div className="flex basis-[81px] items-center justify-center bg-background4">
              {key}
            </div>
            <div className="flex grow gap-2">
              {units.map((unit) => {
                const color = getStatusColor(unit.status, theme.theme);

                return (
                  <Unit
                    key={unit.id}
                    bgColor={color}
                    grow={unit.grow}
                    subTitle={unit.subTitle}
                    title={unit.title}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UnitsList;
