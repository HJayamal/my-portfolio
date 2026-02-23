import React from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-subtitle">GET IN TOUCH</span>

          <h1 className="contact-title">
            Let’s build something <span>extraordinary</span> together.
          </h1>

          <p className="contact-description">
            I’m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Reach out and let’s start
            a conversation.
          </p>

          {/* Email Card */}
          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h4>Email Me</h4>
              <p>harsha@example.com</p>
            </div>
          </div>

          {/* Location Card */}
          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h4>Location</h4>
              <p>Hyderabad, India</p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="contact-socials">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="contact-form-container">
          <h2>Send a Message</h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea
              rows="6"
              placeholder="Tell me about your project..."
            ></textarea>

            <button type="submit">Send Message →</button>
          </form>
        </div>
      </div>

      {/* FULL WIDTH CTA SECTION */}
      <div className="contact-cta">
        <h2>Ready to build something impactful?</h2>
        <p>Let’s turn your ideas into real digital experiences.</p>
        <button>Start a Project</button>
      </div>
    </section>
  );
};

export default Contact;