/*eslint-disable */
import { useState, useEffect } from "react";
import "./signupBox.css";
import loginImage from "./signup4.svg";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { userLogin, userSignup } from "../../features/Auth User/authUserSlice";
import logo from '../../logo.png'

const SignUpBox = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();
  const state = useSelector((state) => state.userData);
  

  useEffect(() => {
    if (state.signup === "true") {
      dispatch(userLogin({ userName, password }));
    }
  }, [state, dispatch]);


  return (
    <div className="login-container only-card">
      <div className="login-image-container">
        <img className="login-image" src={loginImage} alt="err" />
      </div>

      <div className="login-data-container">
        {/* <h1 className="book-store">Fine-Socials</h1> */}
        <div className=" lgpagelogo-cont" >
        <img className="nblogo-img" src={logo} alt="" />
        </div>
        <h3 className="book-store-tagline">Be where the world is going</h3>
        <div className="login-data-sub-box">
          <div className="each-data-cont">
            <p>Full name</p>
            <input
              className="login-input"
              placeholder="Full Name (min 6 char)"
              type="text"
              onChange={(event) => setFullName(event.target.value)}
            ></input>
          </div>
          <div className="each-data-cont">
            <p>Username</p>
            <input
              className="login-input"
              placeholder="UserName (min 3 char)"
              type="text"
              onChange={(event) => setUserName(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Email address</p>
            <input
              className="login-input"
              placeholder="Email"
              type="text"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="each-data-cont">
            <p>Password</p>
            <input
              className="login-input"
              placeholder="(8 char,1 number, uppercase and lowercase)"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </div>
        <div className="for-login-btn-cont">
          <Button
            shape="round"
            size="large"
            color="red"
            type="primary"
            onClick={() =>
              dispatch(userSignup({ fullName, userName, email, password }))
            }
          >
            Sign Up
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpBox;
