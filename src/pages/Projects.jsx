import React from "react";
import "./Projects.css";
import heroImage from "../assets/hero.avif"; // replace with real images
import project2 from "../assets/hero.png";
import project3 from "../assets/hero.png";
import project4 from "../assets/hero.png";
import project5 from "../assets/hero.png";
import project6 from "../assets/hero.png";
import project1 from "../assets/hero.png";


const projectsData = [
  {
    title: "E-commerce Engine",
    year: "2023",
    category: "Platform",
    description:
      "High-performance SaaS e-commerce solution built with Node.js and Shopify API.",
    image: project1,
  },
  {
    title: "SaaS Dashboard",
    year: "2023",
    category: "Web App",
    description:
      "Interactive analytics platform with real-time data visualization.",
    image: project2,
  },
  {
    title: "Crypto Tracker",
    year: "2023",
    category: "Web App",
    description:
      "Live cryptocurrency portfolio tracker with WebSocket updates.",
    image: project3,
  },
  {
    title: "AI Content Platform",
    year: "2024",
    category: "Backend",
    description:
      "AI content generation engine leveraging OpenAI API.",
    image: project4,
  },
  {
    title: "Portfolio v2",
    year: "2022",
    category: "Frontend",
    description:
      "Dark-mode portfolio featuring smooth GSAP animations.",
    image: project5,
  },
  {
    title: "Social Connect",
    year: "2024",
    category: "Mobile",
    description:
      "Community-based mobile application for local networking.",
    image: project6,
  },
];

const Projects = () => {
  return (
    <section className="projects-page">
      {/* ===== HERO SECTION ===== */}
      <div className="projects-hero">
        <div className="hero-content">
          <span className="hero-tag">AVAILABLE FOR NEW PROJECTS</span>
          <h1>
            Hi, I'm Harsha. I build <span>digital experiences.</span>
          </h1>
          <p>
            Professional Web Developer specializing in high-impact digital
            solutions, from scalable e-commerce engines to intuitive SaaS dashboards.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">View My Work</button>
            <button className="secondary-btn">Let's Talk</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={project1} alt="Hero" />
        </div>
      </div>

      {/* ===== PROJECT GRID ===== */}
      <div className="projects-section">
        <h2>Project Portfolio</h2>
        <p className="section-desc">
          A curated selection of recent work involving complex frontend logic,
          robust backends, and pixel-perfect design.
        </p>

        <div className="filter-buttons">
          <button className="filter active">All</button>
          <button className="filter">Web Apps</button>
          <button className="filter">Mobile</button>
          <button className="filter">UI/UX</button>
        </div>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <span className="category">
                  {project.category} • {project.year}
                </span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;