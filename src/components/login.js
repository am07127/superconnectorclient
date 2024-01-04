import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div
      className="position-relative bg-image p-5 shadow-1-strong"
      style={{ marginTop: "30px" }}
    >
        <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${process.env.PUBLIC_URL}/hero.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: "0.7",
        }}
      ></div>
      <div className="login-container">
        <h1>Login</h1>
        <form>
          <input type="text" placeholder="Email or phone number" />
          <input type="password" placeholder="Password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
