function MoviesCard({ card }) {
    return (
      <li className="movie-card">
        <img className="movie-card__image" src={card.thumbnail} alt={`Кадр из фильма ${card.name}`} />
        <div className="movie-card__desc">
          <h3 className="movie-card__title">{card.name}</h3>
          <p className="movie-card__duration">{card.duration}</p>
        </div>
        <button
          type="button"
          aria-label="Сохранить фильм"
        />
      </li>
    )
  }
  
  export default MoviesCard;
