import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./locales/en/translation.json";
import fr from "./locales/fr/translation.json";
import de from "./locales/de/translation.json"
import pl from "./locales/pl/translation.json"
import es from "./locales/es/translation.json"
import pt from "./locales/pt/translation.json"
import da from "./locales/da/translation.json"
import nl from "./locales/nl/translation.json"
import hu from "./locales/hu/translation.json"
import it from "./locales/it/translation.json"
import ro from "./locales/ro/translation.json"
import sv from "./locales/sv/translation.json"
import fi from "./locales/fi/translation.json"
import ru from "./locales/ru/translation.json"
import tr from "./locales/tr/translation.json"
import uk from "./locales/uk/translation.json"
import cs from "./locales/cs/translation.json"
import sk from "./locales/sk/translation.json"

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  de: {
    translation: de,
  },
  pl: {
    translation: pl,
  },
  es: {
    translation: es,
  },
  pt: {
    translation: pt,
  },
  da: {
    translation: da,
  },
  nl: {
    translation: nl,
  },
  hu: {
    translation: hu,
  },
  it: {
    translation: it,
  },
  ro: {
    translation: ro,
  },
  sv: {
    translation: sv,
  },
  fi: {
    translation: fi,
  },
  ru: {
    translation: ru,
  },
  tr: {
    translation: tr,
  },
  uk: {
    translation: uk,
  },
  cs: {
    translation: cs,
  },
  sk: {
    translation: sk,
  },
},

    fallbackLng: "en",

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;