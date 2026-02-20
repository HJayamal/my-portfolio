import React from "react";
import "./Hero.css";
import heroImage from "../assets/hero.png"; // change name if your image file is different

const Hero = () => {
  return (
    <section id="home" className="hero">
      
      <div className="hero-content">
        <p className="hero-tag">🚀 AVAILABLE FOR NEW PROJECTS</p>

        <h1 className="hero-title">
          Crafting <span>Digital</span> Experiences.
        </h1>

        <p className="hero-description">
          Harshal — Frontend Developer. Specialized in building
          high-performance web applications with React, focusing
          on precision UI/UX and modern design.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Hire Me →</button>
          <button className="btn-outline">Let's Talk</button>
        </div>
      </div>

      <div className="hero-image">
        <img src={heroImage} alt="Developer workspace" />
      </div>

    </section>
  );
};

export default Hero;