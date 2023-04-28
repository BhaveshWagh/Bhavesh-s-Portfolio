import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
const Projects = () => {
  return (
    <React.Fragment>
      <Header />
      <header className="hero">
        <h1 className="hero-heading">
          See my <span className="heading-inverted"> code</span>
        </h1>

        <ul className="list-non-bullet">
          <li>
            <div className="showcase-list container container-center ow">
              <h1>marvel fans</h1>

              <p>
                A CLI app built with <strong>nodeJS</strong> nodeJS. You can
                send this to your friends and find out who really knows you
              </p>
              <Link
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
                to="https://replit.com/@BhaveshWagh/end-game#index.js"
              >
                Live Project
              </Link>
              <Link
                className="link link-secondary"
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/BhaveshWagh"
              >
                View Source
              </Link>
            </div>
          </li>
          <li>
            <div className="showcase-list container container-center">
              <h1>how well do you know me?</h1>

              <p>
                A CLI app built with <strong>nodeJS</strong> nodeJS. You can
                send this to your friends and find out who really knows you
              </p>
              <Link
                className="link link-primary"
                target="_blank"
                rel="noopener noreferrer"
                to="https://replit.com/@BhaveshWagh/end-game#index.js"
              >
                Live Project
              </Link>
              <Link
                className="link link-secondary"
                target="_blank"
                rel="noopener noreferrer"
                to="https://github.com/BhaveshWagh"
              >
                View Source
              </Link>
            </div>
          </li>
        </ul>
      </header>

      <Footer />
    </React.Fragment>
  );
};

export default Projects;
