import React from "react";
import "./LanguageSelector.css";

const LANGUAGES = [
  { code: "en", label: "English", emoji: "🇺🇸" },
  { code: "fr", label: "Français", emoji: "🇫🇷" },
  { code: "es", label: "Español", emoji: "🇪🇸" },
  { code: "de", label: "Deutsch", emoji: "🇩🇪" },
  { code: "ja", label: "日本語", emoji: "🇯🇵" },
];

export const LanguageSelector = ({ currentLang = "en", onChange }) => {
  return (
    <div className="language-selector">
      <select
        value={currentLang}
        onChange={(e) => onChange?.(e.target.value)}
        className="language-select"
      >
        {LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.emoji} {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
};
