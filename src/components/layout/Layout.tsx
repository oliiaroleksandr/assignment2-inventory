import { PropsWithChildren } from "react";
import { Sidebar } from "./sidebar";
import { Toolbar } from "./toolbar";
import { Header } from "./header";
import Main from "./Main";
import { ToolbarProvider } from "./ToolbarProvider";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="min-h-screen overflow-clip">
      <ToolbarProvider>
        <Sidebar />
        <Toolbar />
        <Header />
        <Main>{children}</Main>
      </ToolbarProvider>
    </div>
  );
};

export default Layout;
