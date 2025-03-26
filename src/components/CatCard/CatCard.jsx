import React from "react";
import "./CatCard.css";
import Button from "../Button/Button";
import { FaHeart } from "react-icons/fa";

const CatCard = ({
  image,
  name,
  breed,
  description,
  buttonText,
  onButtonClick,
  tag,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <article className="card">
      <div className="card-image-container">
        <img className="card-image" src={image} alt={name} />
        <button
          className={`favorite-button ${isFavorite ? "favorite" : ""}`}
          onClick={onToggleFavorite}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <FaHeart />
        </button>
      </div>
      <div className="card-content-wrapper">
        <div className="card-content">
          <h2 className="card-title">{name}</h2>
          <h3 className="card-breed">{breed}</h3>
          <p className="card-description">{description}</p>
          <div className="card-tags">
            <p className="card-tag">{tag[0]}</p>
          <p className="card-tag">{tag[1]}</p>
          </div>
        </div>
        <div className="card-footer">
          <Button
            onButtonClick={onButtonClick}
            buttonText={buttonText}
          ></Button>
        </div>
      </div>
    </article>
  );
};

export default CatCard;
