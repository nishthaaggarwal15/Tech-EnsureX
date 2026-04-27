import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";
import "./services.css";

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-header">
        <div>
          <span>OUR SERVICES</span>
          <h2>Solutions built for the future</h2>
        </div>

        <div className="services-actions">
          <button className="services-secondary">Explore More →</button>
          <button className="services-primary">Live site</button>
        </div>
      </div>

      <div className="services-cards">
        <article className="service-card">
          <div className="service-image">
            <img src={img1} alt="Hospital reception" />
            <div className="service-number">01</div>
          </div>

          <div className="service-content">
            <h3>Hospital Management System</h3>
            <p>
              A fully integrated module for managing hospital operations — from patient records and OPD to billing and appointments.
            </p>
            <div className="service-tags">
              <span>EMR</span>
              <span>Real-time Analytics</span>
            </div>
          </div>
        </article>

        <article className="service-card reverse">
          <div className="service-content">
            <h3>Insurance Automation</h3>
            <p>
              Automate claim processing and patient verification integrated with healthcare records.
            </p>
            <div className="service-tags">
              <span>Paperless Workflow</span>
              <span>API Integration</span>
            </div>
          </div>

          <div className="service-image">
            <img src={img2} alt="Insurance paperwork" />
            <div className="service-number">02</div>
          </div>
        </article>
      </div>
    </section>
  );
}
