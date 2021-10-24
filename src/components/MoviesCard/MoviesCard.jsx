import React from 'react';
import './MoviesCard.css';
import { useLocation, Link } from 'react-router-dom';

import getFullImageUrl from '../../utils/getFullImageUrl';
import convertDuration from '../../utils/convertDuration';

import { ReactComponent as CheckIcon } from '../../images/check-icon.svg';

function MoviesCard({ card, onCardSaveToggle, onCardDelete }) {
  let location = useLocation();

  const movieTrailerPathName = (
    location.pathname === '/movies' ? card.trailerLink : card.trailer
  );

  const cardSaveToggleClassName = (
    `movies-card__btn movies-card__btn_use_save ${card.isSaved ? 'movies-card__btn_active' : ''}`
  );

  const cardSaveButtonContent = (
    card.isSaved ? <CheckIcon /> : 'Save'
  );

  const handleSaveToggle = () => {
    onCardSaveToggle(card);
  };

  const handleDeleteClick = () => {
    onCardDelete(card);
  };

  return (
    <li className="movies-card">
      <Link
        to={{ pathname: movieTrailerPathName }}
        target="_blank"
        aria-label={`Open ${card.nameRU} trailer on youtube`}
      >
        <img 
          className="movies-card__image"
          src={getFullImageUrl(card.image)}
          alt={`${card.nameRU} thumbnail`}
        />
      </Link>
      <div className="movies-card__desc">
        <h3 className="movies-card__title">{card.nameRU}</h3>
        <span className="movies-card__duration">{convertDuration(card.duration)}</span>
      </div>
      {location.pathname === '/saved-movies' && 
        <button
          className="movies-card__btn movies-card__btn_use_delete"
          type="button"
          aria-label="Delete movie"
          onClick={handleDeleteClick}
        />
      }
      {location.pathname === '/movies' &&       
        <button
          className={cardSaveToggleClassName}
          type="button"
          aria-label="Save movie"
          onClick={handleSaveToggle}
        >
          {cardSaveButtonContent}
        </button>
      }
    </li>
  )
}
  
export default MoviesCard;
