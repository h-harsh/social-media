import './navBar.css'
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { clearData } from "../../features/Auth/authSlice";
import { useEffect, useState } from "react";
import {Button} from 'antd'


export const NavBar = () => {
  const token = useSelector((state) => state.userData.token);
  const dispatch = useDispatch();
const navigate = useNavigate()

  useEffect(() => {
    if(!token){
      navigate('/login')
    }
  }, [token, navigate])

  return (
    // <>
      <nav className="navi-bar">
          <div className="navi-bar-logo ">
              Fine-socials
          </div>
          {
              token ? (
                <div className="navi-bar-search-bar">.</div>
              ):(null)
          }
          {
              token ? (
                <ul className="navi-bar-loggedin-menu">
                <li><Link to="/"> <i class="fas fa-home"></i> </Link></li>
                <li><Link to="/timeline"> <i class="fas fa-tasks"></i> </Link></li>
                <li><Link to="/allUsers"> <i class="fas fa-users"></i> </Link></li>
                <li><Link to="/notifications"> <i class="fas fa-bell"></i> </Link></li>
                <li><Link to="/accountDetails"> <i class="fas fa-user-circle"></i> </Link></li>
                </ul>
              ) : (
                <ul className="navi-bar-loggedout-menu">
                    <li><Button size='large'><Link to="/login"> Login </Link>  </Button></li>  
                    <li><Button size="large"><Link to="/signup"> Signup </Link></Button></li>
                </ul>
              )
          }
          {
              token ? (
                <button className="logout" onClick={() => dispatch(clearData())}> <i class="fas fa-power-off"></i> </button>
              ): null
          }
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
