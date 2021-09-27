import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies() {
  return (
    <main className="main page__content">
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default SavedMovies;
