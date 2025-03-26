import React from 'react';
import Button from '../Button/Button';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import './CatCard.css';

const CatCard = ({ id, image, name, description, buttonText, onButtonClick, tag }) => {
  return (
    <article className="card">
      <FavoriteButton
        id={id}
        image={image}
        name={name}
        description={description}
        tag={tag}
      />
      <div className="card-image-container">
        <img className="card-image" src={image} alt={name} />
      </div>
      <div className="card-content">
        <h2 className="card-title">{name}</h2>
        <p className="card-description">{description}</p>
        <p className="card-tag">{tag}</p>
        <Button 
          onButtonClick={onButtonClick}
          buttonText={buttonText}
        />
      </div>
    </article>
  );
};

export default CatCard;