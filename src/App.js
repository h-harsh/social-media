import "./App.css";
import React, {useEffect}  from "react";
import { Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setData } from "./features/Auth/authSlice";
import { getLocalStorage, setupAuthHeaderForServiceCalls } from "./features/Auth/util";
import { Login, SignUp, Home, Timeline, PrivateRoute, Followers, Following, AllUsers, AccountManagement, Notifications, TimelineSelf } from "./Pages/index";
import { NavBar } from "./Components/Nav Bar/navBar";

function App() {
  const state = useSelector((state) => state.userData)
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(setData(getLocalStorage()))
      setupAuthHeaderForServiceCalls(state.token)
  }, [state.token, dispatch])

  return (
    <div className="App">
      <div>
        <NavBar/>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        <PrivateRoute path="/timeline" element={<TimelineSelf />} />
        <PrivateRoute path="/timeline/:userId" element={<Timeline />} />

        
        <PrivateRoute path="/followers" element={<Followers />} />
        <PrivateRoute path="/following" element={<Following />} />
        <PrivateRoute path="/allUsers" element={<AllUsers />} />
        <PrivateRoute path="/accountDetails" element={<AccountManagement />} />
        <PrivateRoute path="/notifications" element={<Notifications />} />
      </Routes>
    </div>
  );
}

export default App;
