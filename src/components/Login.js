import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";
import "../../src/styles.css"

function Login() {
  const dispatch = useDispatch();

  return (
    <div>
      <button className="butn"
        onClick={() => {
          dispatch(login({ name: "Ify", age: 25, email: "ify@gmail.com", gender: "Female" }));
        }}
      >
        Login
      </button>

      <button className="butn"
        onClick={() => {
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Login;
