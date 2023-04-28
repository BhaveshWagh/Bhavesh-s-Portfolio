import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">social media presence</div>
      <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
          <Link className="link" to="https://github.com/BhaveshWagh">
            {" "}
            github{" "}
          </Link>
        </li>
        <li className="list-item-inline">
          <Link className="link" to="/">
            {" "}
            twitter{" "}
          </Link>
        </li>
        <li className="list-item-inline">
          <Link className="link" to="https://www.linkedin.com/in/bhavesh-wagh27">
            linkedin
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
