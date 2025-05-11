import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../../hooks/useFavorites';
import CatCard from '../../components/CatCard/CatCard';
import './FavoritesPage.css';
import { useTranslation } from 'react-i18next';

const FavoritesPage = () => {
  const { favorites } = useFavorites();
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleAdoptClick = (cat) => {
    navigate(`/adopt`, { state: { cat } });
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-page">
        <div className="container">
          <div className="favorites-empty">
            <h2>{t('noFavoritesTitle')}</h2>
            <p>{t('noFavoritesP')}</p>
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
                buttonText={t('catCard.adoptButtonText')}
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