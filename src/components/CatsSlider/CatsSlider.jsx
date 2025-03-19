import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchCats } from '../../services/catService';
import CatCard from '../CatCard/CatCard';
import './CatsSlider.css';

const CatsSlider = () => {
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const visibleCats = 3; 


  const lastPage = Math.floor(cats.length / visibleCats); // lastPage es la página 3 (0, 1, 2) (9 gatos)
  const totalPages = lastPage + 1; //son 4 páginas porque son 3 gatos en 3 páginas + 1 gato en una 1 (10 gatos)
  const currentPageInitialCatIndex = currentPage * visibleCats // índice del primer elemento de la página actual

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
          {/* el slice es para cortar trozos del array: (i donde quieres que empiece, i donde quieres que
          acabe no inclusive)*/}
          {cats.slice(currentPageInitialCatIndex, currentPageInitialCatIndex + visibleCats).map(cat => (
            <div key={cat.id} className="card-item">
              <CatCard
                image={cat.image}
                name={cat.name}
                description={cat.description}
                tag={cat.tag}
                buttonText="Adopt me"
                onButtonClick={() => handleAdoptClick(cat)} //Se pasa como función anónima
                //y solo se ejecuta cuando el usuario haga clic en el botón.
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
        {Array.from({ length: totalPages}, (_, i) => ( //from() genera un array en el que cada elemento
        // tiene un botón que corresponde a cada posición de página 
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