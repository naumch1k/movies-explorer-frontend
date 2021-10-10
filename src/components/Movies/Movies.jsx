import { useState, useEffect, useContext } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { filterMovies, filterMoviesByDuration } from '../../utils/filterMovies';
import isObjEmpty from '../../utils/isObjEmpty';
import { useWindowSize } from '../../hooks/useWindowSize';
import { getCardsRenderSettings } from '../../utils/cardsRenderSettings';

function Movies({ moviesData, savedMoviesData, onNoMoviesData, onCardSaveToggle }) {
  const [isShortfilmCheckboxOn, setIsShortfilmCheckboxOn] = useState(false);
  const [isFilteringMoviesData, setIsFilteringMoviesData] = useState(false);
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [prevRenderedCards, setPrevRenderedCards] = useState([]);
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
    setPrevRenderedCards(filteredMoviesData.slice(0, numberOfCardsToRender));
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
      setCardsToRender(markSavedMovies(prevRenderedCards));
    }
  }, [savedMoviesData, prevRenderedCards]);

  useEffect(() => {
    let lastSearchResult = [];
    if (localStorage.getItem('lastSearchResult')) {
      lastSearchResult = JSON.parse(localStorage.getItem('lastSearchResult'));
    }

    if (isShortfilmCheckboxOn) {
      const lastSearchResultShortfilms = lastSearchResult.filter(filterMoviesByDuration);
      setFilteredMoviesData(lastSearchResultShortfilms);

      if (lastSearchResultShortfilms.length === 0) {
        setNoMoviesFound(true);
      }
      
    } else {
      setFilteredMoviesData(lastSearchResult);
    }
  }, [isShortfilmCheckboxOn]);

  const handleCheckboxChange = (state) => {
    setIsShortfilmCheckboxOn(state);
  };

  const handleNoMoviesData = () => {
    onNoMoviesData();
  }

  const handleSearchFormSubmit = (searchQuery) => {
    if (isObjEmpty(moviesData)) {
      handleNoMoviesData();
    } else {    
      setIsFilteringMoviesData(true);

      let filteredMoviesData = [];
      filteredMoviesData = markSavedMovies(filterMovies(searchQuery, isShortfilmCheckboxOn, moviesData));

      if (filteredMoviesData.length === 0) {
        setNoMoviesFound(true);
      } else {
        setNoMoviesFound(false);
      }

      setFilteredMoviesData(filteredMoviesData);
      localStorage.setItem('lastSearchResult', JSON.stringify(filteredMoviesData));

      setIsFilteringMoviesData(false);
    }
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
    const currentUserSavedMovies = savedMoviesData.filter(savedMovie => savedMovie.owner === currentUser._id);

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
        onCheckboxChange={handleCheckboxChange}
        onSubmit={handleSearchFormSubmit}
      />
      <MoviesCardList
        isFilteringMoviesData={isFilteringMoviesData}
        noMoviesFound={noMoviesFound}
        cards={cardsToRender}
        onCardSaveToggle={onCardSaveToggle}
        onRenderMoreClick={handleRenderMoreClick}
        isMoreCardsToRender={isMoreCardsToRender}
      />
    </main>
  )
}

export default Movies;
