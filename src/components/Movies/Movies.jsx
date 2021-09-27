import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function Movies() {
  return (
    <main className="main page__content">
      <SearchForm />
      <MoviesCardList />
    </main>
  )
}

export default Movies;
