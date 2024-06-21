import { PanelRightClose, PanelRightOpen } from "@/icons";
import { useToolbar } from "../ToolbarProvider";

const ToolbarToggle = () => {
  const { isOpen, setIsOpen } = useToolbar();

  return (
    <button
      aria-label={`${isOpen ? "Close toolbar" : "Open toolbar"}`}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      {isOpen ? <PanelRightClose /> : <PanelRightOpen />}
    </button>
  );
};

export default ToolbarToggle;
