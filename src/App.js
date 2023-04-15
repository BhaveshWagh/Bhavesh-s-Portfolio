import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/Projects";
// import PageNotFound from "./Components/PageNotFound";

import "./App.css";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
