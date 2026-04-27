import { FaHospital, FaLightbulb, FaLock, FaFileAlt } from "react-icons/fa";
import "./about.css";

export default function About() {
  const features = [
    {
      number: "01",
      title: "Empowering Hospitals with Smart Solutions",
      icon: <FaHospital />
    },
    {
      number: "02",
      title: "Unlocking AI Potential for Every Industry",
      icon: <FaLightbulb />
    },
    {
      number: "03",
      title: "Securing Data Through Blockchain Technology",
      icon: <FaLock />
    },
    {
      number: "04",
      title: "Seamless Document Management and Automation",
      icon: <FaFileAlt />
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-left">
          <span className="about-label">ABOUT US</span>
          <h2>Transforming insurance with intelligence</h2>
          
          <p>
            Tech EnsureX is a cutting-edge platform designed to simplify medical insurance claim settlements. By integrating AI and blockchain, it boosts transparency, security, and efficiency.
          </p>
          
          <p>
            The platform includes an Intelligent Smart Document Management System that digitizes and organizes medical records, enhancing hospital-insurance interactions. With a focus on automation, Tech EnsureX promises faster, more secure, and seamless claim processing.
          </p>
          
          <button className="service-btn">Our Services</button>
        </div>

        <div className="about-right">
          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.number} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <span className="feature-number">{feature.number}</span>
                <h4>{feature.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
