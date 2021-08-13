import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { baseurl } from "../../../utils/baseurl";
import { userLogin, userSignup } from "../authSlice";
import './signupBox.css'

export const SignUpBox = () => {
  const [fullName, setFullName] = useState("")
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch()
  const state = useSelector(state => state.userData)
  const navigate = useNavigate()

  useEffect(() => {
    if(state.signup === "true"){
      dispatch(userLogin({userName, password}))
    }
  }, [state, dispatch])
  console.log(state.loginStatus)
  return (
    <div className="signup-box">
        <input
        className="signup-item"
        placeholder="Full name"
          type="text"
          onChange={(event) => setFullName(event.target.value)}
        />
        <input
        className="signup-item"
        placeholder="UserName"
          type="text"
          onChange={(event) => setUserName(event.target.value)}
        />
        <input 
        className="signup-item"
        placeholder="Email"
        type="text" onChange={(event) => setEmail(event.target.value)} />
    
        <input
        className="signup-item"
        placeholder="Password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
    
      <button
      className="signup-item nm-btn2 an"
        // onClick={() => signUpHandler(userName, email, password, loginHandler)}
        onClick={() => dispatch(userSignup({fullName, userName, email, password}))}
      >
        Sign Up
      </button>
    </div>
  );
};
