import React from "react";
import CatsSlider from "../../components/CatsSlider/CatsSlider";
import "./HomePage.css";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const {t} = useTranslation();
  return (
    <div className="home-page">
      <h2 className="section-title">{t("homePage.homeTitle")}</h2>
      <CatsSlider />
    </div>
  );
};

export default HomePage;
