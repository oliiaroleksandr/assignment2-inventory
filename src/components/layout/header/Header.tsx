import LayoutToggle from "./LayoutToggle";

const Header = () => {
  return (
    <header className="border-border2 bg-background1 fixed left-[22.5rem] right-0 top-0 border-b px-8 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-[1.375rem] font-bold leading-[1.27]">
          Units Inventory
        </h1>
        <LayoutToggle />
      </div>
    </header>
  );
};

export default Header;
