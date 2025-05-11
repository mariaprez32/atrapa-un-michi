import React, { useState } from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { LanguageToggle } from '../LanguageToggle/LanguageToggle';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useTranslation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-title">
          <img src="/paw-logo.png" alt="Paw logo" />
          {t('appName')}
        </Link>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>

      <div className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>
          {t('header.goHome')}
        </Link>
        <Link to="/favorites" className="nav-link" onClick={() => setMenuOpen(false)}>
          {t('header.goFavorites')}
        </Link>
        <ThemeToggle />
        <LanguageToggle />
      </div>
    </nav>
  )
}

export default Header