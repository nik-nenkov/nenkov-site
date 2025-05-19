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
            <p>
              Thank you for  your time and attention!
            </p>
            <br />
            <p>
              I offer end-to-end software development, system integration, technical consulting, and mentoring services.
              <br /> <br /> If you are looking for a reliable partner to modernize your IT systems, optimize workflows, or bring your ideas to life, feel free to connect with me.
            </p>
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
                  aria-label="Visit my LinkedIn profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100089466912748"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my Facebook profile"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nik-nenkov"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit my GitHub profile"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:nik.nenkov@icloud.com"
                  aria-label="Send me an email at nik.nenkov@icloud.com"
                >
                  <FontAwesomeIcon icon={faEnvelope} />
                </a>
              </li>
              <li>
                <a
                  href="tel:+359890138750"
                  aria-label="Call me at +359 890 138 750"
                >
                  <FontAwesomeIcon icon={faPhone} />
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Navigation Links Section - Two Columns */}
        <section className="footer-section nav-links-section">
          <div className="footer-nav-columns">
            <ul className="footer-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
            <ul className="footer-nav">
              <li><a href="/courses">Courses</a></li>
              <li><a href="/diagrams">Diagrams</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/books">Books</a></li>
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