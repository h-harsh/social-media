import { useState } from "react";
import { useDispatch } from "react-redux";
import "./loginBox.css";
import { userLogin } from "../authUserSlice";

export const LoginBox = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const dispatch = useDispatch()


  return (
    <div className="login-box" >
      <input
        className="login-item"
        placeholder="Username"
        type="text"
        onChange={(event) => setUserName(event.target.value)}
      />

      <input
        className="login-item"
        placeholder="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <button
        className="login-item nm-btn2 an"
        // onClick={() => loginHandler(userName, password)}
        onClick={() =>dispatch(userLogin({userName, password}))}
      >
        Login
      </button>
      <button
        className="login-item nm-btn2 an"
        // onClick={() => loginHandler(userName, password)}
        onClick={() =>dispatch(userLogin({userName: 'viraj', password:'viraj'}))}
      >
        Login as Guest
      </button>
      {/* <h2 className="login-item ">{loginState}</h2> */}
    </div>
  );
};

