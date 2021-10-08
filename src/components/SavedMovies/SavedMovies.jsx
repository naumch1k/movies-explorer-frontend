import { useState, useEffect } from 'react';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

import filterMovies from '../../utils/filterMovies';

function SavedMovies({ moviesData, onCardDelete }) {
  const [isFilteringMoviesData, setIsFilteringMoviesData] = useState(false);
  const [filteredMoviesData, setfilteredMoviesData] = useState([]);
  const [noMoviesFound, setNoMoviesFound] = useState(false);

  useEffect(() => {
    setfilteredMoviesData(moviesData);
  }, [moviesData]);

  const handleSearchFormSubmit = (searchQuery) => {
    setIsFilteringMoviesData(true);
    
    let filteredMoviesData = [];
    filteredMoviesData = filterMovies(searchQuery, moviesData);

    if (filteredMoviesData.length === 0) {
      setNoMoviesFound(true);
    } else {
      setNoMoviesFound(false);
    }

    setfilteredMoviesData(filteredMoviesData);
    setIsFilteringMoviesData(false);
  }

  const handleCardDelete = (card) => {
    onCardDelete(card);
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
        cards={filteredMoviesData}
        onCardDelete={handleCardDelete}
      />
      )}
    </main>
  )
}

export default SavedMovies;
