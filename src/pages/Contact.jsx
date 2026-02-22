import React from "react";
import "./Contact.css";
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact-page">

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-left">
          <span className="contact-tag">GET IN TOUCH</span>
          <h1>
            Let’s build something <span>extraordinary</span> together.
          </h1>
          <p>
            I’m always open to discussing new projects, creative ideas,
            or opportunities to be part of your vision.
            Reach out and let’s start a conversation.
          </p>

          <div className="contact-info-card">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email Me</h4>
              <span>harsha@example.com</span>
            </div>
          </div>

          <div className="contact-info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Location</h4>
              <span>Hyderabad, India</span>
            </div>
          </div>

          <div className="social-icons">
            <FaGithub />
            <FaLinkedin />
            <FaTwitter />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-form-container">
          <h2>Send a Message</h2>

          <form>
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email Address" />
            </div>

            <input type="text" placeholder="Subject" />

            <textarea rows="5" placeholder="Tell me about your project..."></textarea>

            <button type="submit">Send Message →</button>
          </form>
        </div>

      </div>

    </section>
  );
};

export default Contact;