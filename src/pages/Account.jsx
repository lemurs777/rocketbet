import React from 'react';
import Footer from "../components/Footer";
import AccountAside from "../components/AccountAside";
import Title from "../components/Title/Title";
import Header from "../components/Header";
import {Outlet} from "react-router-dom";
import AccountGeneral from "../components/AccountGeneral";
import HeaderAccount from "../components/HeaderAccount";
import SideBar from "../components/SideBar";
import MobileWidget from "../components/MobileWidget";

const Account = () => {
  return (
    <>
      <HeaderAccount/>
      <SideBar/>
      <div className="container">
        <main className="main main--account">
          <Title>Account</Title>
          <div className="content">
            <AccountAside/>
            <div className="page">
              <Outlet/>
            </div>
          </div>
        </main>
      </div>
      <Footer/>
      <MobileWidget/>
    </>
  );
};

export default Account;