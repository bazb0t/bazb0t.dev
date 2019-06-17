import React from "react";
import HeadLogo from "./HeadLogo";
import "bootstrap/css/bootstrap.css";
import "bootstrap/css/header.css";

function Header() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <HeadLogo />
      </div>
      <div className="navbar-center">welcome to bazb0t.dev!</div>
    </div>
  );
}

export default Header;
