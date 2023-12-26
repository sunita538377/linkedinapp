import React from "react";
import Header from "../../components/header./../components/header/Header";
import Sidebar from "../../components/sidebar./../components/sidebar/Sidebar";
import Feed from "../../components/feed./../components/feed/Feed";
import Widget from "../../components/widget./../components/widget/Widget";
import { ToastContainer } from "react-toastify";

export const Home = () => {
  return (
    <div className="app">
      
      <Header />
      
      <div className="app_body">
        <Sidebar />
        <Feed />
        <ToastContainer  />
        <Widget />
      </div>
    </div>
  );
};
