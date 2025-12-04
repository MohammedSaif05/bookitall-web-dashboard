import React from "react";
import "./App.css";
import logoImg from "./assets/logo.png"; // TEMP: replace with your real logo path

const Login = () => {
  return (
    <div className="login-page">
      <div className="login-logo-wrapper">
        <div className="brand-logo">
          <img src={logoImg} alt="Bookitall logo" className="brand-logo-img" />
        </div>
      </div>

      <div className="login-card">
        <h1 className="login-title">Sign In</h1>
        <p className="login-subtitle">Please enter your login details</p>

        <form className="login-form">
          <div className="login-field">
            <label htmlFor="email" className="login-label">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              className="login-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="login-field">
            <label htmlFor="password" className="login-label">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="login-input"
              placeholder="Enter your password"
            />
          </div>

          <div className="login-extra">
            <label className="login-remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button type="button" className="login-link">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="login-submit">
            Sign In
          </button>
        </form>

        <p className="login-footer">
          Don&apos;t have an account?{" "}
          <button type="button" className="login-link">
            Create one
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;


