import React from 'react';
import './CatCard.css';

const CatCard = ({ image, name, description, buttonText, onButtonClick, tag }) => {
  return (
    <article class="card">
      <img class="card-image" src={image} alt={name} />
      <div class="card-content">
        <h2 class="card-title">{name}</h2>
        <p class="card-description">{description}</p>
        <p class="card-tag">{tag}</p>
      </div>
      <div class="card-footer">
       
        <button class="card-button"
          onClick={onButtonClick}>
          {buttonText}
          </button>
      </div>
    </article>
  );
};

export default CatCard;
