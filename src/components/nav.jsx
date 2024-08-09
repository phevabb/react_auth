import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Nav = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await axios.get("user/");
        setAuth(true);
      } catch (e) {
        setAuth(false);
      }
    })();
  }, []);

  const logout = async () => {
    await axios.post("logout/");
  };

  let links;

  if (auth) {
    links = (
      <div className="text-end">
        <Link to="/" onClick={logout} className="btn btn-outline-light me-2">
          Logout
        </Link>
      </div>
    );
  } else {
    links = (
      <div className="text-end">
        <Link to="/login/" className="btn btn-outline-light me-2">
          Login
        </Link>
        <Link to="/register/" className="btn btn-outline-light me-2">
          Register
        </Link>
      </div>
    );
  }

  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
      <div class="container-fluid">
        {/*home*/}
        <Link to="/" class="navbar-brand" style={{ color: "white" }}>
          Home
        </Link>

        {links}
      </div>
    </nav>
  );
};

export default Nav;
