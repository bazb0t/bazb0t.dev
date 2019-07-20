import React from "react";
import HeadLogo from "./HeadLogo";
import NavButtons from "./NavButtons";
import "bootstrap/css/bootstrap.css";
import "bootstrap/css/header.css";

function Header() {
  return (
    <div className="navbar-container">
      <div className="nav-left">
        <HeadLogo />
      </div>
      <div className="navbar-center">welcome to bazb0t.dev!</div>
      <div className="nav-right">
        <NavButtons />
      </div>
    </div>
  );
}

export default Header;
