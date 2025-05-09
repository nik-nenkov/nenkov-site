import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app-header.scss";
import ExpandableMenu from "../menu/expandable-menu";


export default function AppHeader() {
    return (
      <header className="App-header">
      <div className="profile-container">
        <img src="/nik-avatar-bg.png" alt="Nikolay Nenkov" className="profile-photo" />
        <div className="contact-info">
          <h1>Nikolay Nenkov</h1>
          <p>
            <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:nik.nenkov@icloud.com">nik.nenkov@icloud.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} /> +359 890 138 750
          </p>
        </div>
      </div>
      <ExpandableMenu />
    </header>
    );
}