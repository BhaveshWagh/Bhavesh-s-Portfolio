import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const About = () => {
  return (
    <div>
      <Header />

      <header className="hero">
        <img className="hero-img" src="../images/self_img-up.png" alt="hero" />
        <h1 className="hero-heading">
          Hello I'm
          <span className="heading-inverted"> Bhavesh Wagh </span>
        </h1>
      </header>


      <section className="section ow">
      <div className="container container-center">
        <h1>Hire Me</h1>
        <article>
        <p>
          I am a final year computer engineering student. I'm interested in
          full stack development. I have a good knowledge about Python,
          <span className="bold"> React.js, JavaScript,</span> C programming
          language, SQL & HTML/CSS. I'm looking for exciting opportunity to
          learn more.
        </p>
      </article>
      </div>
    </section>

      <Footer />
    </div>
  );
};

export default About;
