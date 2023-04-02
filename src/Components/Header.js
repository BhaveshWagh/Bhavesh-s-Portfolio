import React from "react";
import { Link } from "react-router-dom";
import '../css/header.css'

const Header = ({ isActive }) => {
  return (
    <div className="header">
      <div>
        <Link to="/">
          <div className="color">Bhavesh's Portfolio</div>
        </Link>
      </div>
      <div className="headerOptions">
        <Link
          to="/"
          //   className={isActive === "Home" ? "activeButton" : "headerButton"}
        >
          Home
        </Link>
        <Link
          to="/about"
          //   className={isActive === "About" ? "activeButton" : "headerButton"}
        >
          About
        </Link>
        <Link
          to="/contact"
          //   className={isActive === "Contact" ? "activeButton" : "headerButton"}
        >
          Contact
        </Link>{" "}
        <Link
          to="/projects"
          //   className={isActive === "projects" ? "activeButton" : "headerButton"}
        >
          projects
        </Link>
      </div>
    </div>
  );
};

export default Header;
