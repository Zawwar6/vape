import { useTranslation } from "react-i18next";

export default function LanguageDropdown() {
  const { i18n } = useTranslation();

  return (
    <select
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
      className="bg-white text-black border border-white/20 rounded-lg px-3 py-2 outline-none"
    >
    <option value="en">🇬🇧 English</option>
    <option value="fr">🇫🇷 Français</option>
    <option value="de">🇩🇪 Deutsch</option>
    <option value="pl">🇵🇱 Polski</option>
    <option value="es">🇪🇸 Español</option>
    <option value="pt">🇵🇹 Português</option>
    <option value="da">🇩🇰 Dansk</option>
    <option value="nl">🇳🇱 Nederlands</option>
    <option value="hu">🇭🇺 Magyar</option>
    <option value="it">🇮🇹 Italiano</option>
    <option value="ro">🇷🇴 Română</option>
    <option value="sv">🇸🇪 Svenska</option>
    <option value="fi">🇫🇮 Suomi</option>
    <option value="ru">🇷🇺 Русский</option>
    <option value="tr">🇹🇷 Türkçe</option>
    <option value="uk">🇺🇦 Українська</option>
    <option value="cs">🇨🇿 Čeština</option>
    <option value="sk">🇸🇰 Slovenčina</option>
    </select>
  );
}