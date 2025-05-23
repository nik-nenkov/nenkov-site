import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app-header.scss";
import ExpandableMenu from "../menu/expandable-menu";
import { useState } from "react";
import { useTranslation } from "react-i18next";

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
  const { t, i18n } = useTranslation();

  const selectedLang = languages.find((l) => l.code === lang);

  // Change language in i18n when user selects a new language
  const handleLangChange = (code: string) => {
    setLang(code);
    i18n.changeLanguage(code);
    setShowLangList(false);
  };

  return (
    <header className="App-header">
      <div className="profile-container">
        <img
          src="/Nik-123.png"
          alt={t("nikNenkov")}
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
          <h1>{t("nikNenkov")}</h1>
          <p style={{ color: "gold" }}>{t("fullStackDeveloper")}</p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />{" "}
            <a href="mailto:nik.nenkov@icloud.com">
              {t("contactEmail")}: nik.nenkov@icloud.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+359890138750">
              {t("contactPhone")}: +359 890 138 750
            </a>
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
                  onClick={() => handleLangChange(l.code)}
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