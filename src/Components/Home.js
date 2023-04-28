import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Header isActive={"Home"} />

      <header className="hero">
        <img className="hero-img" src="../images/hero.svg" alt="hero" />
        <h1 className="hero-heading">
          Hello I'm Bhavesh Wagh
          <span className="heading-inverted"> Full-Stack developer</span>
        </h1>
      </header>

      

      <section className="section">
      <div className="container container-center">
        <h1>projects</h1>
        <p>
          I like to showcase my work and thus, you can see my projects hosted
          online.
        </p>
         <a className="link link-prime"  href="/projects">See Projects</a>
      </div>
    </section>

      <section className="section ow">
        <div classNameclass="container container-center">
          <h1>Contact</h1>
          <p>Hire Me</p>
          <a className="link link-secondary" href="/contact">
            Contact
          </a>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
