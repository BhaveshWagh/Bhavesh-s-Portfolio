import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <Header />
      <ul class="list-non-bullet">
        <li>
          <img
            className="self-img"
            src="../images/self_img-up.png"
            alt="hero"
          />
          <article class="showcase-list container container-center">
            <h1>I'm Bhavesh Wagh</h1>
            <small>17 October 2021</small>
            <p>
              I am a final year computer engineering student. I'm interested in
              full stack development. I have a good knowledge about Python,
              <span className="bold"> React.js, JavaScript,</span> C
              programming language, SQL & HTML/CSS. I'm looking for exciting
              opportunity to learn more.
            </p>
          </article>
        </li>
      </ul>
      <Footer />
    </div>
  );
};

export default About;
