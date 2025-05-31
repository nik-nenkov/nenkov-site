import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./lang-switch.scss";

const languages = [
  { code: "bg", label: "Български", flag: "🇧🇬" },
  { code: "us", label: "International", flag: "🇺🇸" },
];

export default function LangSwitch() {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "us");
  const [showLangList, setShowLangList] = useState(false);

  useEffect(() => {
    setLang(i18n.language);
  }, [i18n.language]);

  const selectedLang = languages.find((l) => l.code === lang);

  const handleLangChange = (code: string) => {
    i18n.changeLanguage(code);
    setShowLangList(false);
  };

  return (
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
        <span className="flag" aria-label={selectedLang?.label}>
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
  );
}