import React from 'react'
import './Button.css'

const Button = ({onButtonClick, buttonText, disabled, type}) => {
  return (
    <button className="card-button"
    onClick={onButtonClick}
    disabled={disabled}
    type={type}>
    {buttonText}
    </button>
  )
}

export default Button