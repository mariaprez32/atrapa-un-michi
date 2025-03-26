import React from 'react';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { useFavorites } from '../../hooks/useFavorites';
import './FavoriteButton.css';

const FavoriteButton = ({ id, image, name, description, tag }) => {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.preventDefault(); 
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
    <button 
      className={`favorite-button ${isFavorite(id) ? 'favorite' : ''}`}
      onClick={handleFavoriteClick}
      aria-label={isFavorite(id) ? 'Remove from favorites' : 'Add to favorites'}
    >
      {isFavorite(id) ? <FaHeart /> : <FaRegHeart />}
    </button>
  );
};

export default FavoriteButton; 