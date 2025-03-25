import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCats } from '../../services/catService';
import CatCard from '../CatCard/CatCard';
import './CatsSlider.css';

const CatsSlider = () => {
  const [cats, setCats] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const visibleCats = 3;


  useEffect(() => {
    const savedFavorites = localStorage.getItem('favoriteCats');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteCats', JSON.stringify(favorites));
  }, [favorites]);

  const lastPage = Math.floor(cats.length / visibleCats);
  const totalPages = lastPage + 1;
  const currentPageInitialCatIndex = currentPage * visibleCats;

  useEffect(() => {
    const loadCats = async () => {
      try {
        setLoading(true);
        const catsData = await fetchCats();
        setCats(catsData);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error loading cats.');
        setLoading(false);
      }
    };
    
    loadCats();
  }, []);

  const nextSlide = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const prevSlide = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleAdoptClick = (cat) => {
    navigate(`/adopt`, {state: {cat}});
  };

  const toggleFavorite = (catId) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(catId)) {
        return prevFavorites.filter(id => id !== catId);
      } else {
        return [...prevFavorites, catId];
      }
    });
  };

  if (loading) return (
    <div className="slider-loading">
      <div>
        <div className="loading-spinner"></div>
        <p>Loading adorable cats...</p>
      </div>
    </div>
  );
  
  if (error) return (
    <div className="slider-error">
      <p>{error}</p>
      <button 
        className="card-button" 
        onClick={() => window.location.reload()}
      >
        Try again
      </button>
    </div>
  );

  if (cats.length === 0) return (
    <div className="slider-empty">
      <p>There are not available cats at this moment.</p>
    </div>
  );

  return (
    <div className="cats-slider">
      <div className="slider-container">
        {currentPage > 0 ? (
          <button 
            className="slider-nav slider-prev"
            onClick={prevSlide}
          >
            &lt;
          </button>
        ) : null}
        
        <div className="multi-card-wrapper">
          {cats.slice(currentPageInitialCatIndex, currentPageInitialCatIndex + visibleCats).map(cat => (
            <div key={cat.id} className="card-item">
              <CatCard
                image={cat.image}
                name={cat.name}
                description={cat.description}
                tag={cat.tag}
                buttonText="Adopt me"
                onButtonClick={() => handleAdoptClick(cat.id)}
                isFavorite={favorites.includes(cat.id)}
                onToggleFavorite={() => toggleFavorite(cat.id)}
              />
            </div>
          ))}
        </div>
        
        {currentPage < lastPage ? (
          <button 
            className="slider-nav slider-next"
            onClick={nextSlide}
          >
            &gt;
          </button>
        ) : null}
      </div>
      
      <div className="slider-indicators">
        {Array.from({ length: totalPages}, (_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CatsSlider;