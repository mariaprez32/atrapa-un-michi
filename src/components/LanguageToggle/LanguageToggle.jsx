import React from "react";
import { useLanguage } from "../../hooks/useLanguage";
import './LanguageToggle.css';
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage();
  const {t} =useTranslation();

  const handleChangeLanguage = (event) => {
    changeLanguage(event.target.value);
  };

  return (
    <select
      className="language-toggle"
      value={language}
      onChange={handleChangeLanguage}
    >
      <option value="es">{t("languageToggle.es")}</option>
      <option value="en">{t("languageToggle.en")}</option>
    </select>
  );
};
