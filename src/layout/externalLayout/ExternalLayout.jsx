import React from "react";
import NavBar from "../../components/navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const ExternalLayout = () => {
  return (
    <>
      <main>
        <NavBar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
};

export default ExternalLayout;
