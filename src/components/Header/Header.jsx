import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">
          <img src="/paw-logo.png" alt="Paw logo" />
          Catch a kitty
        </Link>
      </div>
      
      <div className="navbar-links">
        <Link to="/" className="nav-link">
          Inicio
        </Link>
        <Link to="/favorites" className="nav-link">
          Favoritos
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Header