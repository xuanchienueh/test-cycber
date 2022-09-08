import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../component/footer/Footer";
import Header from "../../component/header/Header";


function HomeTemplate() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default HomeTemplate;