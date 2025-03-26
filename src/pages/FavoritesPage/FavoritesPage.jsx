import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import CatCard from '../../components/CatCard/CatCard';
import './FavoritesPage.css';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const handleAdoptClick = (cat) => {
    navigate(`/adopt`, { state: { cat } });
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="container">
          <div className="favorites-empty">
            <h2>No favorites yet</h2>
            <p>Go back to the home page and add some cats to your favorites!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <div className="container">
        <h2 className="section-title">Your favorite cats</h2>
        <div className="favorites-grid">
          {favorites.map((cat) => (
            <div key={cat.id} className="favorites-card-item">
              <CatCard
                id={cat.id}
                image={cat.image}
                name={cat.name}
                description={cat.description}
                tag={cat.tag}
                buttonText="Adopt me"
                onButtonClick={() => handleAdoptClick(cat)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavoritesPage; 