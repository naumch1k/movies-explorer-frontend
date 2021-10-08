import { useState, useEffect, useContext } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import filterMovies from '../../utils/filterMovies';
import isObjEmpty from '../../utils/isObjEmpty';
import { useWindowSize } from '../../hooks/useWindowSize';
import { getCardsRenderSettings } from '../../utils/cardsRenderSettings';

function Movies({ moviesData, savedMoviesData, onCardSaveToggle }) {
  const [isFilteringMoviesData, setIsFilteringMoviesData] = useState(false);
  const [prevFilteredMoviesData, setPrevFilteredMoviesData] = useState([]);
  const [filteredMoviesData, setfilteredMoviesData] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [cardsToRender, setCardsToRender] = useState([]);
  const [cardsRenderSettings, setCardsRenderSettings] = useState({total: 12, add: 3});
  const [numberOfCardsToRender, setNumberOfCardsToRender] = useState(0);
  const [isMoreCardsToRender, setIsMoreCardsToRender] = useState(false);

  const currentUser = useContext(CurrentUserContext);
  const { width } = useWindowSize();

  useEffect(() => {
    setCardsRenderSettings(getCardsRenderSettings(width));
  }, [width]);

  useEffect(() => {
    setCardsToRender(filteredMoviesData.slice(0, numberOfCardsToRender));
  }, [filteredMoviesData, numberOfCardsToRender]);

  useEffect(() => {
    if (filteredMoviesData.length <= cardsRenderSettings.total) {
      setNumberOfCardsToRender(filteredMoviesData.length);
      setIsMoreCardsToRender(false);
    } else {
      setNumberOfCardsToRender(cardsRenderSettings.total)
      setIsMoreCardsToRender(true);
    }
  }, [filteredMoviesData, cardsRenderSettings]);

  useEffect(() => {
    if (!isObjEmpty(savedMoviesData)) {
      setCardsToRender(markSavedMovies(prevFilteredMoviesData));
    }
  }, [savedMoviesData]);

  const handleSearchFormSubmit = (searchQuery) => {
    setIsFilteringMoviesData(true);

    let filteredMoviesData = [];
    filteredMoviesData = markSavedMovies(filterMovies(searchQuery, moviesData));

    if (filteredMoviesData.length === 0) {
      setNoMoviesFound(true);
    } else {
      setNoMoviesFound(false);
    }

    setfilteredMoviesData(filteredMoviesData);
    setPrevFilteredMoviesData(filteredMoviesData);
    setIsFilteringMoviesData(false);
  }
  
  const handleRenderMoreClick = () => {
    let numberOfFoundMovies = filteredMoviesData.length;
    let newNumberOfCardsToRender = numberOfCardsToRender + cardsRenderSettings.add;

    if (newNumberOfCardsToRender >= numberOfFoundMovies) {
      newNumberOfCardsToRender = numberOfFoundMovies;
      setIsMoreCardsToRender(false);
    }
    setNumberOfCardsToRender(newNumberOfCardsToRender);
  };

  const markSavedMovies = (movies) => {
    const savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    const currentUserSavedMovies = savedMovies.filter(savedMovie => savedMovie.owner === currentUser._id);

    return movies.map((movie) => {
      const {
        id, country, director, duration, year, description,
        image, trailerLink, nameRU, nameEN,
      } = movie;

      let isSaved = false;
      if (currentUserSavedMovies.some(savedMovie => savedMovie.movieId === id)) isSaved = true;
  
      const newMovie = {
        id, country, director, duration, year, description,
        image, trailerLink, nameRU, nameEN, isSaved: isSaved,
      };
  
      return newMovie;
    })
  }

  return (
    <main className="main page__content">
      <SearchForm
        onSubmit={handleSearchFormSubmit}
      />
      {!isFilteringMoviesData && noMoviesFound && (
        <p>Ничего не найдено</p>
      )}
      {isFilteringMoviesData && (
        <Preloader />
      )}
      {!isFilteringMoviesData && !noMoviesFound && (
        <MoviesCardList
          cards={cardsToRender}
          onCardSaveToggle={onCardSaveToggle}
          onRenderMoreClick={handleRenderMoreClick}
          isMoreCardsToRender={isMoreCardsToRender}
        />
      )}
    </main>
  )
}

export default Movies;
