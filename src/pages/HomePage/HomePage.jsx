import React from "react";
import CatsSlider from "../../components/CatsSlider/CatsSlider";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <h2 className="section-title">Cats looking for a home</h2>
      <CatsSlider />
    </div>
  );
};

export default HomePage;
