import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen items-stretch overflow-hidden">
      <Sidebar />
      <Toolbar />
      {children}
    </div>
  );
};

export default Layout;
