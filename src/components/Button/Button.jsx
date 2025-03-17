import React from 'react'
import './Button.css'


const Button = ({onButtonClick, buttonText}) => {
  return (
    <button className="card-button"
    onClick={onButtonClick}>
    {buttonText}
    </button>
  )
}

export default Button