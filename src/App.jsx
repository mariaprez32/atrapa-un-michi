import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";
import "./App.css";
import CatCard from "./components/CatCard/CatCard";

function App() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Atrapa un michi</Link>
        </h1>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt" element={<AdoptPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <CatCard
          image="./public/gato.svg"
          name="Saimon"
          description="Mishi is a very playful cat that loves to play with toys."
          buttonText="Adopt"
          tag="Available"
          onButtonClick={() => alert("You adopted Mishi!")}
        />

      </main>
      <footer>
        <p>© 2025 Purrfect Companions. All rights reserved.</p>
        <p>Contact us: adopta@atrapaunmichi.com</p>
      </footer>
    </>
  );
}

export default App;
