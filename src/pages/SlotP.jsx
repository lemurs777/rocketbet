import React from 'react';
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import {Outlet} from "react-router-dom";
import Footer from "../components/Footer";
import MobileWidget from "../components/MobileWidget";

const SlotP = () => {
  return (
    <div>
      <Header/>
      <SideBar/>
      <Outlet/>
      <Footer/>
      <MobileWidget/>
    </div>
  );
};

export default SlotP;