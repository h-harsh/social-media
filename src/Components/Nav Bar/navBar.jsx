import "./navBar.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearData } from "../../features/Auth User/authUserSlice";
import { useEffect, useState } from "react";
import { Button } from "antd";
import logo from '../../logo.png'
import logoSmall from '../../logo-small.png'

export const NavBar = () => {
  const token = useSelector((state) => state.userData.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  return (
    // <>
    <nav className="navi-bar">
      {/* <div className="book-store">Fine-socials</div> */}
      <div className=" nblogo-cont" >
        <img className="nblogo-img" src={logo} alt="" />
      </div>
      <div className=" nblogo-cont-mob" >
        <img className="nblogo-img" src={logoSmall} alt="" />
      </div>
      {token ? (
        <ul className="navi-bar-loggedin-menu">
          <li className="icons-outer-cont" >
            <Link className="nav-icon-cont" to="/">
              {" "}
              <i  className="fas fa-home nav-icons "></i>{" "}
            </Link>
          </li>
          <li className="icons-outer-cont" >
            <Link className="nav-icon-cont" to="/timeline">
              {" "}
              <i  className="fas fa-tasks nav-icons "></i>{" "}
            </Link>
          </li>
          <li className="icons-outer-cont" >
            <Link className="nav-icon-cont" to="/allUsers">
              {" "}
              <i  className="fas fa-users nav-icons "></i>{" "}
            </Link>
          </li>
          <li className="icons-outer-cont" >
            <Link className="nav-icon-cont" to="/notifications">
              {" "}
              <i  className="fas fa-bell nav-icons "></i>{" "}
            </Link>
          </li>
          <li className="icons-outer-cont" >
            <Link className="nav-icon-cont" to="/accountDetails">
              {" "}
              <i  className="fas fa-user-circle nav-icons "></i>{" "}
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="navi-bar-loggedout-menu">
          <li>
            <Link to="/login">
              <Button size="large" type="secondary" shape="round">Login</Button>
            </Link>
          </li>
          {/* <li>
          <Link to="/signup">
              <Button size="large" type="secondary" shape="round">Sign Up</Button>
            </Link>
          </li> */}
        </ul>
      )}
      {token ? (
        <button  className="logout nav-icon-cont" onClick={() => dispatch(clearData())}>
          {" "}
          <i  className="fas fa-power-off nav-icons "></i>{" "}
        </button>
      ) : null}
    </nav>
    // </>
  );
};

export const NavBar2 = () => {
  const state = useSelector((state) => state.userData);
  const dispatch = useDispatch();

  return (
    <nav>
      <Link to="/"> Home </Link> ||
      <Link to="/login"> Login </Link> ||
      <Link to="/signup"> Signup </Link> ||
      <Link to="/feed"> Feed </Link> ||
      <Link to="/timeline"> Timeline </Link> ||
      <Link to="/followers"> Followers </Link> ||
      <Link to="/following"> Following </Link> ||
      <Link to="/allUsers"> All Users </Link> ||
      <Link to="/accountDetails"> Account edit </Link> ||
      <Link to="/notifications"> Notifications </Link> ||
      <button onClick={() => dispatch(clearData())}> Logout </button>
    </nav>
  );
};
