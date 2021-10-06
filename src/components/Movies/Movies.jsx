import { useState, useEffect } from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ 
  isLoadingData,
  noMoviesFound,
  handleSearchFormSubmit,
  moviesData
}) {
  const [cardsRenderSettings, setCardsRenderSettings] = useState({total: 12, add: 3});
  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(0);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [isMoreCardsToRender, setIsMoreCardsToRender] = useState(false);

  useEffect(() => {
    if (moviesData.length <= cardsRenderSettings.total) {
      setNumberOfCardsToRender(moviesData.length);
      setIsMoreCardsToRender(false);
    } else {
      setNumberOfCardsToRender(cardsRenderSettings.total)
      setIsMoreCardsToRender(true);
    }
  }, [moviesData, cardsRenderSettings]);

  useEffect(() => {
    setCardsToRender(moviesData.slice(0, numberOfCardsToRender));
  }, [numberOfCardsToRender, moviesData]);

  const handleRenderMoreClick = () => {
    let numberOfFoundMovies = moviesData.length;
    let newNumberOfCardsToRender = numberOfCardsToRender + cardsRenderSettings.add;

    if (newNumberOfCardsToRender >= numberOfFoundMovies) {
      newNumberOfCardsToRender = numberOfFoundMovies;
      setIsMoreCardsToRender(false);
    }
    setNumberOfCardsToRender(newNumberOfCardsToRender);
  };

  return (
    <main className="main page__content">
      <SearchForm
        onSubmit={handleSearchFormSubmit}
      />
      {!isLoadingData && noMoviesFound && (
        <p>Ничего не найдено</p>
      )}
      {isLoadingData && (
        <Preloader />
      )}
      {!isLoadingData && !noMoviesFound && (
        <MoviesCardList
          cards={cardsToRender}
          onClick={handleRenderMoreClick}
          isMoreCardsToRender={isMoreCardsToRender}
        />
      )}
    </main>
  )
}

export default Movies;
