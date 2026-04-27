import "./stats.css";

export default function Stats() {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stat">
          <h3>AI-Powered</h3>
          <p>Claims Processing</p>
        </div>
        <div className="stat">
          <h3>Blockchain</h3>
          <p>Data Security</p>
        </div>
        <div className="stat">
          <h3>100%</h3>
          <p>Paperless Workflow</p>
        </div>
      </div>
      
      <div className="scroll-down">
        <span>SCROLL DOWN</span>
        <div className="chevron"></div>
      </div>
    </section>
  );
}
