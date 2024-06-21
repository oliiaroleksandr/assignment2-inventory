import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

type ContextValue = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Context = createContext<ContextValue | null>(null);

export function ToolbarProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Context.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </Context.Provider>
  );
}

export const useToolbar = () => {
  const value = useContext(Context);

  if (!value) {
    throw new Error("useToolbar must be used within a ToolbarProvider");
  }

  return value;
};
