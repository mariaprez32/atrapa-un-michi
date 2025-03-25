import React from 'react'
import "./AdoptPage.css"
import AdoptForm from '../../components/AdoptForm/AdoptForm';
import { useLocation } from 'react-router-dom';
import { BackButton } from '../../components/BackButton/BackButton';

const AdoptPage = () => {
 //el useLocation hace posible obtener el objeto de la pantalla anterior, pero al volver a la pantalla anterior el fetch nos refresca los datos
  const {state:{cat}} = useLocation() 
  return (
    <div className='adopt-page'>
    <AdoptForm cat={cat}></AdoptForm>
    </div>
  );
};

export default AdoptPage;
