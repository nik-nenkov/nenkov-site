import "./app-footer.scss";
import SocialLinks from "./social-links";

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