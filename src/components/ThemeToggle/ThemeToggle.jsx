import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import './ThemeToggle.css';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

function ThemeToggle() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <button className={`theme-toggle ${theme}`} onClick={toggleTheme}>
      {theme === 'light' ? <FaRegMoon /> : <FaRegSun/>}
    </button>
  );
}

export default ThemeToggle;