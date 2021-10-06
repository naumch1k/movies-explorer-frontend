import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies({ 
  isLoadingData,
  noMoviesFound,
  handleSearchFormSubmit,
  moviesData
}) {
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
        <MoviesCardList cards={moviesData} />
      )}
    </main>
  )
}

export default Movies;
