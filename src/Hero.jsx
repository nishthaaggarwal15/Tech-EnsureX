import "./Hero.css";

export default function Hero() {
  return (
    <div className="hero">
      {/* LEFT */}
      <div className="hero-left">
        <div className="badge">
          <span className="dot"></span>
          AI & Blockchain Solutions
        </div>

        <h1>
          Empowering <br />
          Healthcare with <br />
          Smart, Seamless <br />
          Management
        </h1>

        <p>
          Tech EnsureX transforms medical insurance claim settlements with AI
          and blockchain — faster, more transparent, and fully automated.
        </p>

        <div className="buttons">
          <button className="btn-dark">Let’s talk →</button>
          <button className="btn-light">Learn more</button>
        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">
        <div className="grid">
          <Card title="Hospital Management" sub="OPD · Billing · EMR" />
          <Card title="AI Assistance" sub="Diagnostics · Automation" />
          <Card title="Blockchain Security" sub="GDPR · Data Integrity" />
          <Card title="Insurance Automation" sub="Claims · Verification" />
        </div>

        <div className="platform">
          <div className="circle">TX</div>
          <div>
            <h4>Tech EnsureX Platform</h4>
            <p>Smart · Secure · Seamless</p>
          </div>
        </div>

        <div className="floating">
          <h4>Simplifying Tomorrow</h4>
          <p>Powered by AI & Blockchain</p>
        </div>
      </div>
    </div>
  );
}

function Card({ title, sub }) {
  return (
    <div className="card">
      <h4>{title}</h4>
      <p>{sub}</p>
    </div>
  );
}