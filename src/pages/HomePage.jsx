import React from 'react';
import CatsSlider from "../components/CatsSlider/CatsSlider"; 

const HomePage = () => {
  return (
    <div className="home-page">
      <section className="slider-section">
        <div className="container">
          <h2 className="section-title">Gatitos en busca de hogar</h2>
          <CatsSlider />
        </div>
      </section>
    </div>
  );
};

export default HomePage;