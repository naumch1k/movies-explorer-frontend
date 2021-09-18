import './MoviesCard.css';

function MoviesCard({ card }) {
    return (
      <li className="movies-card">
        <img className="movies-card__image" src={card.thumbnail} alt={`Кадр из фильма ${card.name}`} />
        <div className="movies-card__desc">
          <h3 className="movies-card__title">{card.name}</h3>
          <span className="movies-card__duration">{card.duration}</span>
        </div>
        <button
          className="movies-card__save-btn"
          type="button"
          aria-label="Сохранить фильм"
        >
          Сохранить
        </button>
      </li>
    )
  }
  
  export default MoviesCard;
