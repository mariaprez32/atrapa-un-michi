import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Button/Button.css'

export const BackButton = () => {
    const navigate = useNavigate();
  return (
    <div><button onClick={() => navigate(-1)}>Go back</button></div>
  )
}
