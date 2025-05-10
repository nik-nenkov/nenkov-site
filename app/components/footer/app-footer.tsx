import "./app-footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-content">
        
        <div className="footer-left-part">
          
        {/* Thank You Section */}
        <section className="footer-section thank-you-section">
          <h2>Thank You</h2>
          <p>Thank you for visiting our website. We appreciate your time and interest!</p>
          <p>Greenwall Business Systems Ltd. is a leading provider of innovative software solutions,
             dedicated to helping businesses thrive in the digital age.</p>
        </section>

        {/* Social Links Section */}
        <section className="footer-section social-links-section">
          <h2>Connect</h2>
          <ul className="social-links">
            <li>
              <a
                href="https://www.linkedin.com/in/nik-nenkov"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our LinkedIn profile"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=100089466912748"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook profile"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/nik-nenkov"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our GitHub profile"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="mailto:nik.nenkov@icloud.com"
                aria-label="Send us an email at nik.nenkov@icloud.com"
              >
                <FontAwesomeIcon icon={faEnvelope} />
              </a>
            </li>
            <li>
              <a
                href="tel:+359890138750"
                aria-label="Call us at +359 890 138 750"
              >
                <FontAwesomeIcon icon={faPhone} />
              </a>
            </li>
          </ul>
        </section>
        </div>

        {/* Navigation Links Section */}
        <section className="footer-section nav-links-section">
          <h3>Explore</h3>
          <ul className="footer-nav">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/diagrams">Diagrams</a></li>
            <li><a href="/projects">Projects</a></li>
          </ul>
        </section>

      </div>

      {/* Copyright Section */}
      <div className="footer-copyright">
        <p>&copy; 2025 Greenwall Business Systems Ltd. All rights reserved.</p>
      </div>
    </footer>
  );
}