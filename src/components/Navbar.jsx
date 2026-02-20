import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
  const handleScroll = () => {
    const sections = ["home", "about", "projects", "contact"];

    // Active link logic
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(section);
        }
      }
    });

    // Background change logic
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);
  return (
    <nav className="navbar">
      <h2 className="logo">HARSHAL.</h2>

      <div className="nav-links">
        <a href="#home" className={active === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={active === "about" ? "active" : ""}>
          About
        </a>
        <a href="#projects" className={active === "projects" ? "active" : ""}>
          Projects
        </a>
        <a href="#contact" className={active === "contact" ? "active" : ""}>
          Contact
        </a>
      </div>

      <button className="hire-btn">Hire Me</button>
    </nav>
  );
};

export default Navbar;