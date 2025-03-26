import React, { useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext/ThemeContext';
import './ThemeToggle.css';
import { FaRegMoon } from 'react-icons/fa';
import { BsSun } from 'react-icons/bs';

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
      {theme === 'light' ? <FaRegMoon /> : <BsSun />}
    </button>
  );
}

export default ThemeToggle;