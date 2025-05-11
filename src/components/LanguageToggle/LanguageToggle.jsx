import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import './LanguageToggle.css';

export const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();

  const handleChangeLanguage = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select
      className="language-toggle"
      value={language}
      onChange={handleChangeLanguage}
    >
      <option value="es">Spanish</option>
      <option value="en">English</option>
    </select>
  );
};
