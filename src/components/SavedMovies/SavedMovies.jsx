import { useState, useEffect, useContext } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { filterMovies, filterMoviesByDuration } from '../../utils/filterMovies';

function SavedMovies({ moviesData, onCardDelete }) {
  const [isShortfilmCheckboxOn, setIsShortfilmCheckboxOn] = useState(false);
  const [isFilteringMoviesData, setIsFilteringMoviesData] = useState(false);
  const [filteredMoviesData, setFilteredMoviesData] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    let lastSearchResult = [];
    if (localStorage.getItem('lastSavedMoviesSearchResult')) {
      lastSearchResult = JSON.parse(localStorage.getItem('lastSavedMoviesSearchResult'));
    }

    if (isShortfilmCheckboxOn) {
      const lastSearchResultShortfilms = filteredMoviesData.filter(filterMoviesByDuration);
      setFilteredMoviesData(lastSearchResultShortfilms);

      if (lastSearchResultShortfilms.length === 0) {
        setNoMoviesFound(true);
      }

    } else {
      if (lastSearchResult.length !== 0) {
        setFilteredMoviesData(lastSearchResult);
      } else {
        setFilteredMoviesData(moviesData);
      }
    }
  }, [isShortfilmCheckboxOn]);

  useEffect(() => {
    setFilteredMoviesData(filterCurrentUserMoviesData(moviesData));
  }, [moviesData]);

  const handleCheckboxChange = (state) => {
    setIsShortfilmCheckboxOn(state);
  };

  const handleSearchFormSubmit = (searchQuery) => {
    setIsFilteringMoviesData(true);
    
    let filteredMoviesData = [];
    filteredMoviesData = filterMovies(searchQuery, isShortfilmCheckboxOn, filterCurrentUserMoviesData(moviesData));

    if (filteredMoviesData.length === 0) {
      setNoMoviesFound(true);
    } else {
      setNoMoviesFound(false);
    }

    setFilteredMoviesData(filteredMoviesData);
    localStorage.setItem('lastSavedMoviesSearchResult', JSON.stringify(filteredMoviesData));

    setIsFilteringMoviesData(false);
  }

  const filterCurrentUserMoviesData = (moviesData) => {
    return moviesData.filter(
      (card) => !card.owner || (card.owner._id ?? card.owner) === currentUser._id,
    );
  }

  const handleCardDelete = (card) => {
    onCardDelete(card);
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
        cards={filteredMoviesData}
        onCardDelete={handleCardDelete}
      />
    </main>
  )
}

export default SavedMovies;
