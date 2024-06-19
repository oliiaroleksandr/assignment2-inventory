import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import Toolbar from "./Toolbar";
import Header from "./Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Sidebar />
      <Toolbar />
      <Header />
      <main className="pb-11 pt-[6.875rem] pl-[24.5rem] pr-8">{children}</main>
    </div>
  );
};

export default Layout;
