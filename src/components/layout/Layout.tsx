import { PropsWithChildren } from "react";
import Sidebar from "./Sidebar";
import { Toolbar } from "./toolbar";
import { Header } from "./header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Sidebar />
      <Toolbar />
      <Header />
      <main className="pb-11 pl-[24.5rem] pr-8 pt-[6.875rem]">{children}</main>
    </div>
  );
};

export default Layout;
