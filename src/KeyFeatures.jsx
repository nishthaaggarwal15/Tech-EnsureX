import { FaBrain, FaFileAlt, FaBolt } from "react-icons/fa";
import "./keyfeatures.css";

export default function KeyFeatures() {
  const features = [
    {
      title: "AI and Blockchain",
      description: "Ensures secure, transparent claim settlements.",
      icon: <FaBrain />
    },
    {
      title: "Smart Docs",
      description: "Digitizes and organizes medical records efficiently.",
      icon: <FaFileAlt />
    },
    {
      title: "Automation",
      description: "Speeds up and secures claim processing.",
      icon: <FaBolt />
    }
  ];

  return (
    <section className="keyfeatures-section">
      <div className="keyfeatures-content">
        <div className="keyfeatures-header">
          <span>WHAT WE OFFER</span>
          <h2>Key Features</h2>
          <p>Built to modernise every touchpoint of healthcare and insurance operations.</p>
        </div>

        <div className="keyfeatures-grid">
          {features.map((feature) => (
            <article key={feature.title} className="feature-card">
              <div className="feature-icon-wrapper">
                <div className="feature-icon">{feature.icon}</div>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              <a href="#" className="feature-link">Learn More →</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
