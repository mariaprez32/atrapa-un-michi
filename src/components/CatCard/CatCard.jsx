import React from "react";
import "./CatCard.css";
import Button from "../Button/Button";
import { FaHeart } from "react-icons/fa";
import FavoriteButton from "../FavoriteButton/FavoriteButton"

const CatCard = ({
  id,
  image,
  name,
  breed,
  description,
  buttonText,
  onButtonClick,
  tag
}) => {
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