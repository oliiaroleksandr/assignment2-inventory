import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen items-stretch overflow-hidden">
      <Sidebar />
      <Toolbar />
      <div className="grow">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
