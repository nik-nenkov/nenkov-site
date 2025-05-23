import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import bg from "./locales/bg/translation.json";
import fr from "./locales/fr/translation.json";
import de from "./locales/de/translation.json";
import el from "./locales/el/translation.json";
import es from "./locales/es/translation.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      bg: { translation: bg },
      fr: { translation: fr },
      de: { translation: de },
      el: { translation: el },
      es: { translation: es }
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;