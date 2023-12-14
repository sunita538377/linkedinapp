import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widget from "./Widget";
import { ToastContainer } from "react-toastify";


export const Home = () => {
  return (
    <div className="app">
      
      <Header />
      
      <div className="app_body">
        
        <Sidebar />
        <Feed />
        <ToastContainer/>
        <Widget />
      </div>
    </div>
  );
};
