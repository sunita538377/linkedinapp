import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { setToken, setUser } from "../../Redux/Authentication";
import { Button } from "@mui/material";
import logo from "../../assests/linkedin_logo.avif";

const Login = () => {
  // const [signUp, setSignUp] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();

    let response = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectId: "f104bi07c490",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          appType: "linkedin",
        }),
      }
    );

    response = await response.json();
    console.log("status", response.token);
    // projectID: "f104bi07c490",
    if (response && response.token) {
      toast.success(response.status, {
        position: toast.POSITION.TOP_CENTER,
      });
      navigate("/");
      dispatch(setUser(response.data));
      dispatch(setToken(response.token));
    } else {
      toast.error(response.message, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <div className="loginScreen">
        <ToastContainer />
        <img src={logo} alt="logo" />
        <form onSubmit={login}>
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
            type="submit"
            onClick={login}
            className="btn"
            style={{ backgroundColor: "#0a66c2", color: "white" }}
          >
            Sign In
          </Button>
          <h4>
            Not a member ?{" "}
            <Link to={"/signup"}>
              <span>Register Here</span>
            </Link>
          </h4>
        </form>
        {/* )} */}
      </div>
    </>
  );
};

export default Login;
