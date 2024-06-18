import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen items-stretch overflow-hidden">
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
