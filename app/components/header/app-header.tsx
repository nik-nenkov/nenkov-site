import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./app-header.scss";
import ExpandableMenu from "../menu/expandable-menu";
import { useState, useEffect } from "react";
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
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "bg");
  const [showLangList, setShowLangList] = useState(false);

  // Sync local lang state with i18n language
  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const selectedLang = languages.find((l) => l.code === lang);

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangList(false);
  };

  return (
    <header className="App-header">
      <div className="profile-container">
        <img
          src="/images/avatar_192x192.webp"
          alt={t("nikNenkov")}
          className="profile-photo"
          fetchPriority="high"
          width="192"
          height="192"
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
              nik.nenkov@icloud.com
            </a>
          </p>
          <p>
            <FontAwesomeIcon icon={faPhone} />{" "}
            <a href="tel:+359890138750">
              +359 890 138 750
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