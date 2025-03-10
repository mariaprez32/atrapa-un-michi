import { useState } from "react";
import { Routes, Route, Navigate, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AdoptPage from "./pages/AdoptPage";
import "./App.css";

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
      </main>
      <footer>
        <p>© 2025 Purrfect Companions. All rights reserved.</p>
        <p>Contact us: adopta@atrapaunmichi.com</p>
      </footer>
    </>
  );
}

export default App;
