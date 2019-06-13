import React from "react";
import HeadLogo from "./HeadLogo";
import { Button } from "react-bootstrap";
import resume from "assets/Mia.Baz.pdf";
import "bootstrap/css/bootstrap.css";
import "bootstrap/css/header.css";

function Header() {
  return (
    <div className="navbar-container">
      <div className="navbar-left">
        <HeadLogo />
      </div>
      <div className="navbar-center">welcome to bazb0t.dev!</div>
      <div className="navbar-right">
        <Button
          variant="primary"
          size="lg"
          href="https://github.com/bazb0t"
          target="_blank"
          rel="noopener noreferrer"
          value="github"
        >
          github
        </Button>

        <Button
          variant="primary"
          size="lg"
          href="https://linkedin.com/in/miabaz"
          target="_blank"
          rel="noopener noreferrer"
          value="linkedIn"
        >
          linkedIn
        </Button>

        <Button
          variant="primary"
          size="lg"
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          value="resume"
        >
          resume
        </Button>
      </div>
    </div>
  );
}

export default Header;
