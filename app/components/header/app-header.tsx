import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app-header.scss";
import ExpandableMenu from "../menu/expandable-menu";
import { useState } from "react";

// Language options with flag emojis
const languages = [
  { code: "bg", label: "Български", flag: "🇧🇬" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "el", label: "Ελληνικά", flag: "🇬🇷" },
  { code: "es", label: "Español", flag: "🇪🇸" },
];

export default function AppHeader() {
  const [lang, setLang] = useState("en");
  const [showLangList, setShowLangList] = useState(false);

  const selectedLang = languages.find((l) => l.code === lang);

  return (
    <header className="App-header">
      <div className="profile-container">
        <img
          src="/Nik-123.png"
          alt="Nikolay Nenkov"
          className="profile-photo"
          title="Follow on LinkedIn"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nik-nenkov",
              "_blank"
            )
          }
        />
        <div className="contact-info">
          <h1>Nikolay Nenkov</h1>
          <p style={{ color: "gold" }}>Full Stack Software Developer</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:nik.nenkov@icloud.com">nik.nenkov@icloud.com</a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+359890138750">+359 890 138 750</a>
          </p>
        </div>
      </div>
      {/* Language Switcher */}
      <div
        className="language-switcher"
        onMouseEnter={() => setShowLangList(true)}
        onMouseLeave={() => setShowLangList(false)}
      >
        <button
          className="lang-btn active"
          type="button"
          title={selectedLang?.label}
        >
          <span
            className="flag"
            aria-label={selectedLang?.label}
          >
            {selectedLang?.flag}
          </span>
        </button>
        {showLangList && (
          <div className="lang-list">
            {languages
              .filter((l) => l.code !== lang)
              .map((l) => (
                <button
                  key={l.code}
                  className="lang-btn"
                  onClick={() => {
                    setLang(l.code);
                    setShowLangList(false);
                  }}
                  title={l.label}
                  type="button"
                >
                  <span className="flag" aria-label={l.label}>
                    {l.flag}
                  </span>
                </button>
              ))}
          </div>
        )}
      </div>
      <ExpandableMenu />
    </header>
  );
}