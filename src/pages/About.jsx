import React from "react";
import "./About.css";
import profileImg from "../assets/profile.jpeg"; // replace with your image

const About = () => {
  return (
    <section className="about-page">

      {/* ===== HERO SECTION ===== */}
      <div className="about-hero">
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>

        <div className="about-content">
          <span className="about-tag">ABOUT ME</span>
          <h1>
            Crafting Digital <span>Experiences</span> that Matter
          </h1>
          <p>
            I am a dedicated software engineer with a focus on building
            high-performance web applications. My journey into tech started
            with curiosity for how things work, which evolved into a career
            centered on solving complex problems through elegant code.
          </p>

          <div className="about-buttons">
            <button className="primary-btn">Contact Me</button>
            <button className="secondary-btn">Download CV</button>
          </div>
        </div>
      </div>

      {/* ===== TOOLBOX SECTION ===== */}
      <div className="toolbox-section">
        <h2>Technical Toolbox</h2>
        <div className="toolbox-grid">

          <div className="toolbox-card">
            <h3>Languages</h3>
            <div className="tags">
              <span>JavaScript</span>
              <span>TypeScript</span>
              <span>HTML5</span>
              <span>CSS3</span>
              <span>Python</span>
            </div>
          </div>

          <div className="toolbox-card">
            <h3>Frameworks</h3>
            <div className="tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Tailwind</span>
              <span>Node.js</span>
              <span>Redux</span>
            </div>
          </div>

          <div className="toolbox-card">
            <h3>Tools</h3>
            <div className="tags">
              <span>Git</span>
              <span>Figma</span>
              <span>Docker</span>
              <span>AWS</span>
              <span>Jest</span>
            </div>
          </div>

        </div>
      </div>

      {/* ===== CAREER TIMELINE ===== */}
      <div className="timeline-section">
        <h2>Career Journey</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Senior Frontend Developer</h3>
              <span>2022 – Present</span>
              <p>
                Leading frontend development with React and improving
                performance by 30% across multiple projects.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Full Stack Engineer</h3>
              <span>2020 – 2022</span>
              <p>
                Built scalable applications using React and Node.js with
                optimized database queries.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Junior Web Developer</h3>
              <span>2018 – 2020</span>
              <p>
                Collaborated with design teams to create pixel-perfect
                implementations.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ===== CTA SECTION ===== */}
      <div className="about-cta">
        <h2>
          Let's Build Something <span>Incredible</span>
        </h2>
        <div className="cta-buttons">
          <button className="primary-btn">Start a Conversation</button>
          <button className="secondary-btn">View Recent Work</button>
        </div>
      </div>

    </section>
  );
};

export default About;