import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';

function MoviesCardList({
  isFilteringMoviesData,
  noMoviesFound,
  cards,
  onCardSaveToggle,
  onRenderMoreClick,
  isMoreCardsToRender,
  onCardDelete,
  }) {
    return (
      <section className="movies main__section">
        <div className="main__section-container main__section-container_size_xs">
          {!isFilteringMoviesData && noMoviesFound && (
            <p className="movies__message">Ничего не найдено</p>
          )}
          {isFilteringMoviesData && (
            <Preloader />
          )}
          {!isFilteringMoviesData && !noMoviesFound && (
            <>
              <ul className="movies__list">
                {cards.map((card) => (
                  <MoviesCard
                    key={card.id}
                    card={card}
                    onCardSaveToggle={onCardSaveToggle}
                    onCardDelete={onCardDelete}
                  />
                ))}
              </ul>
              {isMoreCardsToRender && 
                <button
                  className="movies__btn"
                  type="button"
                  aria-label="Показать больше фильмов"
                  onClick={onRenderMoreClick}
                >
                  Ещё
                </button>
              }
            </>
          )}
        </div>
      </section>
    )
  }
  
  export default MoviesCardList;
