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
          <Link to="/">Catch a kitty</Link>
        </h1>
      </header>
      <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/adopt/:id" element={<AdoptPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
      {/* <footer>
        <p>© 2025 Catch a kitty. All rights reserved.</p>
        <p>Contact us: <a href="mailto:adopt@catchakitty.com">adopt@catchakitty.com</a></p>
      </footer> */}
    </>
  );
}

export default App;
