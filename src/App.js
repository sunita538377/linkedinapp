import "./App.css";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/login/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Home } from "./Pages/home/Home";
import "react-toastify/dist/ReactToastify.css";
import Subscription from "./Subscription";
import User from "./UserProfile";

function App() {
  const user = null;
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/premium" element={<Subscription />} />
            <Route path="/user__Profile" element={<User/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;