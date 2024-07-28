import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        {/*home*/}
        <Link to="/" class="navbar-brand" style={{ color: "white" }}>
          Home
        </Link>

        <div className="text-end">
          <Link to="/login/" className="btn btn-outline-light me-2">
            Login
          </Link>
          <Link to="/register/" className="btn btn-outline-light me-2">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
