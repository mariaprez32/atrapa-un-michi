import React from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import './CatCard.css';
import Button from '../Button/Button';

const CatCard = ({ id, image, name, description, buttonText, onButtonClick, tag }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.preventDefault(); // Evita que se propague el click al card
    const catData = { 
      id,
      image, 
      name, 
      description, 
      tag 
    };
    
    if (isFavorite(id)) {
      removeFavorite(id);
    } else {
      addFavorite(catData);
    }
  };

  return (
    <article className="card">
      <button 
        className={`favorite-button ${isFavorite(id) ? 'favorite' : ''}`}
        onClick={handleFavoriteClick}
        aria-label={isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite(id) ? <FaHeart /> : <FaRegHeart />}
      </button>
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