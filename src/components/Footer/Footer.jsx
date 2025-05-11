import React from 'react'
import './Footer.css'
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
      <footer>
        <p>{t("footer.firstText")}</p>
        <p>{t("footer.secondText")} <a href="mailto:adopt@catchakitty.com">adopt@catchakitty.com</a></p>
      </footer> 
  )
}

export default Footer