import React from "react";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    // Send a POST request
    const response = await axios({
      method: "post",
      url: "login/",
      data: {
        email: email,
        password: password,
      },
    });

    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);
    Cookies.set("refresh_token", response.data.refresh_token);
    Cookies.set("access_token", response.data.access_token);

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="form-signin col-6 col-sm-6 col-md-6 col-lg-4 offset-3 offset-sm-3 offset-md-3 offset-lg-4 ">
      <form onSubmit={submit}>
        {/* for email */}
        <h2> Login </h2>
        <div>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" htmlFor="email">
            Email
          </label>
        </div>

        {/* for password */}
        <div>
          <input
            className="form-control"
            type="password"
            id="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
        </div>

        {/* for button */}
        <div style={{ padding: "1rem" }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>

      <div>
        <Link to="/register/">register</Link>
      </div>
    </div>
  );
};

export default Login;
