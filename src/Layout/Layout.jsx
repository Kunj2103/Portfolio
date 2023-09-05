import React from "react";
import SideNav from "../components/SideNav";
import Resume from "../components/Resume";

const Layout = () => {
  return (
    <>
      <SideNav />
      <main className="resume">
        <Resume />
      </main>
    </>
  );
};

export default Layout;
