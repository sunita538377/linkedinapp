import "./App.css";
import Login from "./Pages/login/Login";
import SignUp from "./Pages/login/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import { Home } from "./Pages/home/Home";
import "react-toastify/dist/ReactToastify.css";
import Subscription from "./Subscription";
import UserProfile from "./Pages/UserProfile/UserProfile";
import ComingSoon from "./ComingSoon";
import SearchPage from "./Pages/searchPages/SearchPage";

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
            <Route path="user" element={<UserProfile />} />
            <Route path="/comingSoon" element={<ComingSoon />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
