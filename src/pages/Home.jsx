import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Outlet} from "react-router-dom";
import SideBar from "../components/SideBar";
import MobileWidget from "../components/MobileWidget";

const Home = () => {
  return (
    <>
      <Header/>
      <SideBar/>
      <Outlet/>
      <Footer/>
      <MobileWidget/>
    </>
  );
};

export default Home;