import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
    <h1>
      <Link to="/"><img src="/paw-logo.png"/>Catch a kitty<img src="/paw-logo.png"/></Link>
    </h1>
  </header>
  )
}

export default Header