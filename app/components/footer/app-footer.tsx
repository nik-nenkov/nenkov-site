import "./app-footer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faFacebook, faLinkedin, faXing } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function AppFooter() {
    return (
        
      <footer className="footer">
      <ul className="social-links">
        {/* <li>
          <a href="https://x.com/nik_nenkov" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
        </li> */}
        <li>
          <a href="https://www.xing.com/profile/Nik_Nenkov" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXing} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/nik-nenkov" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/profile.php?id=100089466912748" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li>
          <a href="mailto:nik.nenkov@icloud.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
        </li>
        <li>
          <a href="tel:+359890138750">
            <FontAwesomeIcon icon={faPhone} />
          </a>
        </li>
      </ul>
    </footer>
    );
}