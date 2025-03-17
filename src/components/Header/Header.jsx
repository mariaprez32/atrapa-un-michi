import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";
import ThemeToggle from '../ThemeToggle/ThemeToggle';


const Header = () => {
  return (
    <header>
    <h1>
      <Link to="/"><img src="/paw-logo.png"/>Catch a kitty<img src="/paw-logo.png"/></Link>
      </h1>
      <ThemeToggle/>
  </header>
  )
}

export default Header