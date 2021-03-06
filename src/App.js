import "./App.css";
import "antd/dist/antd.css";
import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./features/Auth User/authUserSlice";
import {
  getLocalStorage,
  setupAuthHeaderForServiceCalls,
} from "./features/Auth User/util";
import {
  Login,
  SignUp,
  Home,
  Timeline,
  PrivateRoute,
  Followers,
  Following,
  AllUsers,
  AccountManagement,
  Notifications,
  TimelineSelf,
} from "./Pages/index";
import { NavBar } from "./Components/Nav Bar/navBar";
import { SideBarMain } from "./Components/Side Bar Main/sideBar";
import { RSideBar } from "./Components/Side Bar 2/rightSideBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const state = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(getLocalStorage()));
    setupAuthHeaderForServiceCalls(state.token);
  }, [state.token, dispatch]);

  return (
    <div>
      <div className="app-nav-bar">
        <NavBar />
      </div>
      {state.token ? (
        <div className="app-main-comp">
          <div className="comp-left">
            <SideBarMain />
          </div>
          <div className="comp-mid">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <PrivateRoute path="/" element={<Home />} />
              <PrivateRoute path="/timeline" element={<TimelineSelf />} />
              <PrivateRoute path="/timeline/:userId" element={<Timeline />} />
              <PrivateRoute path="/followers" element={<Followers />} />
              <PrivateRoute path="/following" element={<Following />} />
              <PrivateRoute path="/allUsers" element={<AllUsers />} />
              <PrivateRoute
                path="/accountDetails"
                element={<AccountManagement />}
              />
              <PrivateRoute path="/notifications" element={<Notifications />} />
            </Routes>
          </div>
          <div className="comp-right">
            <RSideBar />
          </div>
        </div>
      ) : (
        <div className="app-main-comp-loggedout">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      )}
      <ToastContainer position="bottom-right" theme="light" autoClose={3000} />
    </div>
  );
}

export default App;
