import React, { useState } from "react";
import logo from "./assests/linkedin_logo.avif";
import SearchIcon from "@mui/icons-material/Search";
import "./style/header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import Subscription from "./Subscription";
import { Link } from "react-router-dom";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu =()=>{
    setOpenMenu(!openMenu);
  }
  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={PeopleIcon} title="My Network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={MessageIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notifications" />
        {/* <HeaderOptions avatar={Avatar} title="Sunita Patra"/> */}
        <div className="userMenu" onClick={handleMenu}>
          <div className="header__options">
            {/* {Icon && <Icon></Icon>} */}
            {/* {avatar && <Avatar name={avatar} />} */}
            <Avatar />
            <span>{"Sunita Patra"}</span>
          </div>
          {openMenu && <div className="header__menu">
          <Link to={"/premium"}><h4>Try Premium</h4></Link>
          </div>}
          
        </div>
      </div>
    </div>
  );
};

export default Header;
