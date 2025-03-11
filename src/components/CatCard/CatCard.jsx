import React from 'react';

const CatCard = ({ image, name, description, buttonText, onButtonClick }) => {
  return (
    <div>
      <img src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div>
        <button
          onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CatCard;
