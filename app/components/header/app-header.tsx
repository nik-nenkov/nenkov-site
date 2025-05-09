import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app-header.scss";
import ExpandableMenu from "../menu/expandable-menu";


export default function AppHeader() {
    return (
      <header className="App-header">
      <div className="profile-container">
        <img 
          src="/nik.webp" 
          alt="Nikolay Nenkov" 
          className="profile-photo" 
          title="Follow on LinkedIn"
          onClick={() => window.open("https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nik-nenkov", "_blank")}
        />
        <div className="contact-info">
          <h1>Nikolay Nenkov</h1>
            <p style={{ color: "gold" }}>Full Stack Software Developer</p>
          <p>
        <FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:nik.nenkov@icloud.com">nik.nenkov@icloud.com</a>
          </p>
            <p>
            <FontAwesomeIcon icon={faPhone} /> <a href="tel:+359890138750">+359 890 138 750</a>
            </p>
        </div>
      </div>
      <ExpandableMenu />
    </header>
    );
}