import React, { useState } from "react";
import logo from "../../assests/linkedin_logo.avif";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import HeaderOptions from "./HeaderOptions";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";

import { Link } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { useDispatch } from "react-redux";

import { logout } from "../../Redux/Authentication";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [searchText, setSearchText] = useState();
  const [searchResults, setSearchResults] = useState([]);
  const user = JSON.parse(localStorage.getItem("linkedin-user"));
  const dispatch = useDispatch();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/linkedin/post?search={"author.name":"${searchText}"}`,
        {
          headers: {
            projectID: "f104bi07c490",
          },
        }
      );

      const data = await response.json();
      setSearchResults(data); // Assuming the API response is an array of job postings
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log("search result", searchResults);
  const handleSignOut = () => {
    dispatch(logout());
  };

  return (
    <div className="header">
      <div className="header__left">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__search">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSearch();
              }
            }}
          />
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
            <span>{user.name}</span>
          </div>
          {openMenu && (
            <div className="header__menu">
              <Link to={"/user__Profile"}>
                <Avatar />
                View Profile
              </Link>
              <Link to={"/premium"}>
                <h4>Try Premium</h4>
              </Link>
              <div className="signout" onClick={handleSignOut}>
                <LogoutIcon /> Sign Out
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
