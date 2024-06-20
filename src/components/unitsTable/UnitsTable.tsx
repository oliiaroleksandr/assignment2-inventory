import ColumnNames from "./ColumnNames";
import Heading from "./Heading";
import UnitsList from "./UnitsList";

const InventoryTable = () => {
  return (
    <>
      <div className="mb-1">
        <Heading />
      </div>
      <div className="mb-1">
        <ColumnNames />
      </div>
      <UnitsList />
    </>
  );
};

export default InventoryTable;
