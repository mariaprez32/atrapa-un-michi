import React, { useState, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchCats } from "../../services/catService";
import CatCard from "../CatCard/CatCard";
import "./CatsSlider.css";

const CatsSlider = () => {
  const [visibleCats, setVisibleCats] = useState(null);
  const [cats, setCats] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const lastPage = Math.ceil(cats.length / visibleCats) - 1;
  const totalPages = lastPage + 1;
  const currentPageInitialCatIndex = currentPage * visibleCats;

  useEffect(() => {
    let isActive = true; 
    const loadCats = async () => {
      try {
        setLoading(true);
        const catsData = await fetchCats();
        if (isActive) setCats(catsData);
      } catch (err) {
        if (isActive) setError(err.message || "Error loading cats.");
      } finally {
        if (isActive) setLoading(false);
      }
    };

    loadCats();
    return () => { isActive = false; }; 
  }, []);
 
  const updateVisibleCats = () => {
    const width = window.innerWidth;
    if (width <= 1023) {
      setVisibleCats(1);
    } else {
      setVisibleCats(3);
    }
  };

  useLayoutEffect(() => {
    updateVisibleCats();
    window.addEventListener('resize', updateVisibleCats);
    return () => window.removeEventListener('resize', updateVisibleCats);
  }, []);



  const nextSlide = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevSlide = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleAdoptClick = (cat) => {
    navigate(`/adopt`, { state: { cat } });
  };

  if (loading)
    return (
      <div className="slider-loading">
          <p>Loading adorable cats...</p>
      </div>
    );

  if (error)
    return (
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

  if (cats.length === 0)
    return (
      <div className="slider-empty">
        <p>There are not available cats at this moment.</p>
      </div>
    );

  return (
    <div className="cats-slider">
      <div className="slider-container">
        <button
          className={`slider-nav slider-prev ${
            currentPage === 0 ? "hidden-button" : ""
          }`}
          onClick={prevSlide}
        >
          &lt;
        </button>

        <div className="multi-card-wrapper">
          {cats
            .slice(
              currentPageInitialCatIndex,
              currentPageInitialCatIndex + visibleCats
            )
            .map((cat) => (
              <div key={cat.id} className="card-item">
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

        <button
          className={`slider-nav slider-next ${
            currentPage === lastPage ? "hidden-button" : ""
          }`}
          onClick={nextSlide}
        >
          &gt;
        </button>
      </div>

      <div className="slider-indicators">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            className={`slider-dot ${i === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(i)}
          />
        ))}
      </div>
    </div>
  );
};

export default CatsSlider;
