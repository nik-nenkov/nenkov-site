import "./app-footer.scss";
import SocialLinks from "./social-links";
import { Link } from "react-router-dom";

export default function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        <div className="footer-left-part">
          {/* Thank You Section */}
          <section className="footer-section thank-you-section">
            <h2>Thank You</h2>
            <p>
              Thank you for your time and attention!
            </p>
            <br />
            <p>
              I offer end-to-end software development, system integration, technical consulting, and mentoring services.
              <br /> <br /> If you are looking for a reliable partner to modernize your IT systems, optimize workflows, or bring your ideas to life, feel free to connect with me.
            </p>
          </section>
          {/* Social Links Section */}
          <SocialLinks />
        </div>
        {/* Navigation Links Section - Two Columns */}
        <section className="footer-section nav-links-section">
          <div className="footer-nav-columns">
            <ul className="footer-nav">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/skills">Skills</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
            <ul className="footer-nav">
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/diagrams">Diagrams</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/books">Books</Link></li>
            </ul>
          </div>
        </section>
      </div>
      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&copy; 2025 Nikolay Nenkov</p>
      </div>
    </footer>
  );
}