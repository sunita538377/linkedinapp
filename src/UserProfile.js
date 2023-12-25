import { Avatar } from "@mui/material";
import React from "react";
import "./style/userProfile.css";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import logo from "../src/assests/linkedin_logo.avif";
import { Link } from "react-router-dom";

const User = () => {
  const user = JSON.parse(localStorage.getItem("linkedin-user"));
  return (
    <div className="user__Profile">
      <div className="user">
        <div className="user__Details">
          <div>
            <img
              src="https://media.istockphoto.com/id/1341408852/video/colored-smoke-on-a-dark-background-blue-and-red-light-with-smoke.jpg?s=640x640&k=20&c=v2DQUY8IVbli_6FH_9KAs6YWRXlDdYiBJHfp7JFh7NY="
              alt="bacground"
            />
            <div className="user__image">
              <Avatar sx={{ width: 120, height: 120 }} />
            </div>
          </div>
          <div>
          <h3>
            <span>{user.name}</span>
          </h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            natus, sed asperiores totam atque tenetur architecto facilis
            aliquid.
          </span>
          <span>Connecting and Messaging feature is not available</span>
          </div>
          <div className="buttons">
            <button>
              <PersonAddIcon />
              Connect
            </button>
            <button>Message</button>
            <button>More</button>
          </div>
        </div>

        <div className="about">
          <h3>About</h3>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            natus, sed asperiores totam atque tenetur architecto facilis
            aliquid.
          </span>
          <sapn>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni
            natus, sed asperiores totam atque tenetur architecto facilis
            aliquid.Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Magni natus, sed asperiores totam atque tenetur architecto facilis
            aliquid.
          </sapn>
        </div>
      </div>
      <div className="free">
        <span>Boost your job search with Premium</span>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <span>See who's viewed your profile in the last 90 days</span>
        <Link to={"/premium"}>
          <button>Try for free!</button>
        </Link>
      </div>
    </div>
  );
};

export default User;
