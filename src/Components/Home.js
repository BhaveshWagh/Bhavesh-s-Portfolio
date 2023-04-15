import React from "react";
import Header from "./Header";
import Footer from "./Footer";
const Home = () => {
  return (
    <div>
      <Header isActive={"Home"} />

      <header className="hero">
        <img className="hero-img" src="../images/hero.svg" alt="hero" />
        <h1 className="hero-heading">
          Hello I'm Bhavesh Wagh
          <span className="heading-inverted"> Full-Stack developer</span>
        </h1>
      </header>
      <Footer />
    </div>
  );
};

export default Home;
