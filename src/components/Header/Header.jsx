import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">
          <img src="/paw-logo.png" alt="Paw logo" />
          Catch a kitty
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          Inicio
        </Link>
        <Link to="/favorites" className="nav-link" onClick={() => setMenuOpen(false)}>
          Favoritos
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  )
}

export default Header