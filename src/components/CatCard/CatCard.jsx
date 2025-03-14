import React from 'react';
import './CatCard.css';
import Button from '../Button/Button';

const CatCard = ({ image, name, description, buttonText, onButtonClick, tag }) => {
  return (
    <article className="card">
      <img className="card-image" src={image} alt={name} />
      <div className='card-content-wrapper'>
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <p className="card-description">{description}</p>
          <p className="card-tag">{tag}</p>
        </div>
        <div className="card-footer">
          <Button
            onButtonClick={onButtonClick}
            buttonText={buttonText}>
            </Button>
        </div>
      </div> 
    </article>
  );
};

export default CatCard;
