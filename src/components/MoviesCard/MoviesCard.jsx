import React from 'react';
import './MoviesCard.css';

import { ReactComponent as CheckIcon } from '../../images/check-icon.svg';

function MoviesCard({ card }) {


  // temp for dev purposes
  const [isSaved, setIsSaved] = React.useState(false);

  const handleSaveClick = () => {
    setIsSaved(true);
  };
  // end

  const cardSaveButtonClassName = (
    `movies-card__save-btn ${isSaved ? 'movies-card__save-btn_active' : ''}`
  ); 

  const cardSaveButtonContent = (
    isSaved ? <CheckIcon /> : 'Сохранить'
  );

  return (
    <li className="movies-card">
      <img className="movies-card__image" src={card.thumbnail} alt={`Кадр из фильма ${card.name}`} />
      <div className="movies-card__desc">
        <h3 className="movies-card__title">{card.name}</h3>
        <span className="movies-card__duration">{card.duration}</span>
      </div>
      <button
        className={cardSaveButtonClassName}
        type="button"
        aria-label="Сохранить фильм"
        onClick={handleSaveClick}
      >
        {cardSaveButtonContent}
      </button>
    </li>
  )
}
  
export default MoviesCard;
