import React from "react";
import "./social-links.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function SocialLinks() {
  return (
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
            href="mailto:nik@nenkov.site"
            aria-label="Send me an email at nik@nenkov.site"
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
  );
}