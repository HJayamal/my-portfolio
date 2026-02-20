import "./SkillsSection.css"

function SkillsSection() {
  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-left">
          <p className="section-tag">TECHNICAL STACK</p>
          <h2>Mastering the Modern Web Ecosystem</h2>
          <p className="skills-desc">
            I specialize in building robust frontend and backend solutions.
            My toolkit is centered around scalability, performance, and user-centric design.
          </p>

          <div className="skills-list">
            <div className="skill-item">⚡ React / Next.js</div>
            <div className="skill-item">🎨 UI/UX Design</div>
            <div className="skill-item">🚀 Performance Optimization</div>
            <div className="skill-item">🔐 Secure APIs</div>
          </div>
        </div>

        <div className="skills-right">
          <div className="code-card">
            <pre>
{`const developer = {
  name: "Your Name",
  role: "Frontend Developer",
  stack: ["React", "Node", "UI/UX"],
  passion: "Building clean & scalable apps"
}`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection