import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [redirect, setRedirect] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    await axios.post("http://localhost:8000/api/register/", {
      first_name: firstName,
      last_name: lastName,
      email,
      password,
      password_confirm: passwordConfirm,
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="form-signin col-6 col-sm-6 col-md-6 col-lg-4 offset-3 offset-sm-3 offset-md-3 offset-lg-4 ">
      <form onSubmit={submit}>
        <h2> Register </h2>
        <hr />

        {/* for firstName */}
        <div>
          <input
            className="form-control"
            type="text"
            id="fname"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <label className="form-label" htmlFor="fname">
            First Name
          </label>
        </div>

        {/* for Lastname */}
        <div>
          <input
            className="form-control"
            type="text"
            id="lname"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <label className="form-label" htmlFor="lname">
            Last Name
          </label>
        </div>

        {/* for email */}
        <div>
          <input
            className="form-control"
            type="email"
            id="email"
            placeholder="example@gmail.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="form-label" for="email">
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
          <label className="form-label" for="password">
            Password
          </label>
        </div>

        {/* for CONFIRM password */}
        <div>
          <input
            className="form-control"
            type="password"
            id="password_confirm"
            placeholder="Confirm Password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
          <label className="form-label" htmlFor="password_confirm">
            Confirm Password
          </label>
        </div>

        {/* for button */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        {/* end button */}
      </form>
      <div>
        <Link to="/login/">login</Link>
      </div>
    </div>
  );
};

export default Register;
