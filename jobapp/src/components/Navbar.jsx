import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
      <Link to="/">
        <p style={{ fontSize: "20px" }}>Signup</p>
      </Link>

      <Link to="/login">
        <p style={{ fontSize: "20px" }}>Login</p>
      </Link>
    </div>
  );
};

export default Navbar;
