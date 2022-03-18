import { useState } from "react";
import "./loginBox.css";
import loginImage from "./login2.svg";
import { Link } from "react-router-dom";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { userLogin } from "../../features/Auth User/authUserSlice";


const LoginBox = () => {
  const [userName, setUserName] = useState("harsh");
  const [password, setPassword] = useState("Harsh123");
  const dispatch = useDispatch()

  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="res err" />
      </div>

      <div className="login-data-container">
        <h1 className="book-store">Fine-Socials</h1>
        <h3 className="book-store-tagline" >Be where, the world is going</h3>
        <div className="login-data-sub-box">
          <div className="each-data-cont">
            <p>Username or Email</p>
            <input
              className="login-input"
              placeholder="Username"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
              value={userName}
            ></input>
          </div>
          <div className="each-data-cont">
            <p>Your password</p>
            <input
              className="login-input"
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
          <div className="for-login-btn-cont">
            <Button shape="round" size="large" onClick={() =>dispatch(userLogin({userName: userName, password:password}))} type="secondary">
              Login
            </Button>
          </div>
        </div>
        <p>or</p>
        <Link to="/signup" className="for-signup-btn-cont">
          <Button shape="round" size="large" color="red" type="primary">
            Create New account
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default LoginBox;
