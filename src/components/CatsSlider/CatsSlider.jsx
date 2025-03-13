import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCats } from '../../services/catService';
import CatCard from '../CatCard/CatCard';
import './CatsSlider.css';

const CatsSlider = () => {
  const [cats, setCats] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const visibleCats = 3; 

  useEffect(() => {
    const loadCats = async () => {
      try {
        setLoading(true);
        const catsData = await fetchCats();
        setCats(catsData);
        setLoading(false);
      } catch (err) {
        setError(err.message || 'Error al cargar los gatitos');
        setLoading(false);
      }
    };
    
    loadCats();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const lastIndex = cats.length - (visibleCats - 1) // 8
      const nextIndex = prevIndex + 1;
      // return nextIndex >= cats.length - (visibleCats - 1) ? 0 : nextIndex;
      return nextIndex >= lastIndex ? 0 : nextIndex; 
    });
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      // const lastIndex = cats.length - visibleCats;
      // return prevIndex === 0 ? lastIndex > 0 ? lastIndex : 0 : prevIndex - 1;
      const lastIndex = cats.length - 1; // 9
      return prevIndex === 0 ? lastIndex : prevIndex - 1;
    });
  };

  const handleAdoptClick = (id) => {
    navigate(`/adopt/${id}`);
  };

  const getVisibleCatIndices = () => {
    const indices = [];
    for (let i = 0; i < visibleCats; i++) {
      const index = (currentIndex + i) % cats.length;
      indices.push(index);
    }
    return indices;
  };

  if (loading) return (
    <div className="slider-loading">
      <div>
        <div className="loading-spinner"></div>
        <p>Cargando gatitos adorables...</p>
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
        Intentar de nuevo
      </button>
    </div>
  );

  if (cats.length === 0) return (
    <div className="slider-empty">
      <p>No hay gatitos disponibles en este momento.</p>
    </div>
  );

  const visibleCatIndices = getVisibleCatIndices();

  return (
    <div className="cats-slider">
      <div className="slider-container">
        <button 
          className="slider-nav slider-prev"
          onClick={prevSlide}

        >
          &lt;
        </button>
        
        <div className="multi-card-wrapper">
          {visibleCatIndices.map(index => (
            <div key={cats[index].id} className="card-item">
              <CatCard
                image={cats[index].image}
                name={cats[index].name}
                description={cats[index].description}
                tag={cats[index].tag}
                buttonText="¡Adóptame!"
                onButtonClick={() => handleAdoptClick(cats[index].id)}
              />
            </div>
          ))}
        </div>
        
        <button 
          className="slider-nav slider-next"
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>
      
      <div className="slider-indicators">
        {Array.from({ length: Math.max(1, cats.length - (visibleCats - 1)) }, (_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CatsSlider;