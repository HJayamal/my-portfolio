import "./CTASection.css"

function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2>
          Have a project in mind?
          <br />
          <span>Let’s build together.</span>
        </h2>

        <div className="cta-buttons">
          <button className="primary-btn">Hire Me Now</button>
          <button className="secondary-btn">Send an Email</button>
        </div>
      </div>
    </section>
  )
}

export default CTASection