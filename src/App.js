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

function App() {
  const state = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData(getLocalStorage()));
    setupAuthHeaderForServiceCalls(state.token);
  }, [state.token, dispatch]);

  return (
    <div className="app">
      <div className="app-nav-bar">
        <NavBar />
      </div>
      {state.token ? (
        <div className="app-main-comp">
          <div>
            <SideBarMain />
          </div>
          <div>
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
          <div>
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
    </div>
  );
}

export default App;
