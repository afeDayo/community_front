import React from "react";
import InNavbar from "../../components/inNavbar/InNavbar";
import { Outlet } from "react-router-dom";

const InternalLayout = () => {
  return (
    <>
      <main>
        <InNavbar />
        <Outlet />
      </main>
    </>
  );
};

export default InternalLayout;
