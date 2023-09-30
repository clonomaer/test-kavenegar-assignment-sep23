import React, { PropsWithChildren } from "react";
import Header from "./MainHeader";
import Footer from "./MainFooter";

const MainLayout: React.FC<PropsWithChildren<Record<never, never>>> = ({
  children,
}) => {
  return (
    <div className="flex flex-col pt-20 min-h-[--h-screen]">
      <Header />

      <main className="flex-grow px-4 py-3">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
