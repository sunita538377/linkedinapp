import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setToken, setUser } from "../../Redux/Authentication";
import { Button } from "@mui/material";
import logo from "../../assests/linkedin_logo.avif";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async () => {
    const response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: "f104bi07c490",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
          appType: "linkedin",
        }),
      }
    );
    
    const response1 = await response.json();
    console.log("status", response.token);
    if (response1 && response1.token) {
      toast.success(response1.status, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
      dispatch(setUser(response1.data.user));
      dispatch(setToken(response1.token));
    } else {
      toast.error(response1.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };
  return (
    <div className="loginScreen">
      <ToastContainer />
      <img src={logo} alt="logo" />
      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          onClick={register}
          className="btn"
          style={{ backgroundColor: "#0a66c2", color: "white" }}
        >
          Sign Up
        </Button>
        <h4>
          Already a member ?{" "}
          <Link to={"/login"}>
            <span>Login Here</span>
          </Link>
        </h4>
      </form>
    </div>
  );
};
export default SignUp;
