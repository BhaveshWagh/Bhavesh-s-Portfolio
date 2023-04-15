import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-header">social media presence</div>
      <ul className="social-links list-non-bullet">
        <li className="list-item-inline">
          <a className="link" href="https://github.com/BhaveshWagh">
            {" "}
            github{" "}
          </a>
        </li>
        <li className="list-item-inline">
          <a className="link" href="/">
            {" "}
            twitter{" "}
          </a>
        </li>
        <li className="list-item-inline">
          <a className="link" href="https://www.linkedin.com/in/bhavesh-wagh27">
            linkedin
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
