import "./ProjectsSection.css"

function ProjectsSection() {
  return (
    <section id="projects" className="reveal">
      <div className="projects-header">
        <div>
          <p className="section-tag">PORTFOLIO</p>
          <h2>Recent Projects Overview</h2>
        </div>
        <a href="#" className="view-all">
          View All Projects →
        </a>
      </div>

      <div className="projects-grid reveal delay-1">
        <div className="project-card">
          <div className="project-image light"></div>
          <h3>E-commerce Analytics Dashboard</h3>
          <p>High-performance dashboard with real-time analytics and data visualization.</p>
        </div>

        <div className="project-card reveal delay-2">
          <div className="project-image teal"></div>
          <h3>Fintech Banking App</h3>
          <p>Secure mobile-first banking interface with seamless UX and authentication.</p>
        </div>

        <div className="project-card reveal delay-3">
          <div className="project-image minimal"></div>
          <h3>SaaS Workflow Engine</h3>
          <p>Automation system for managing enterprise-level workflows efficiently.</p>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection