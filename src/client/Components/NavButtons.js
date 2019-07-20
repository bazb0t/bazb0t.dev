import React from "react";
import { Button } from "react-bootstrap";
import resume from "assets/Mia.Baz.pdf";
import "bootstrap/css/bootstrap.css";
import "bootstrap/css/header.css";

function NavButtons() {
  return (
    <div className="navbar-right">
      {" "}
      {/* change this */}
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
  );
}
export default NavButtons;
