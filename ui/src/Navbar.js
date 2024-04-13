import React from "react";
import logo from "./images/logo.svg";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <img src={logo} alt="" className="w-12 " />
      <a className="btn btn-ghost text-xl">VNdID</a>
    </div>
  );
}

export default Navbar;
