import { SHORT_FILM_MAX_DURATION } from './constants';

const filterMovies = (searchQuery, moviesData) => {
  const { keyword = '', shortfilm = false } = searchQuery;

  const filterByKeyword = (movie) => {
    return JSON.stringify(movie).toLowerCase().includes(keyword.toLowerCase())
  }

  const filterByDuration= (movie) => {
    return movie.duration <= SHORT_FILM_MAX_DURATION;
  }

  if (shortfilm) {
    return moviesData.filter(filterByDuration).filter(filterByKeyword);
  } else {
    return moviesData.filter(filterByKeyword);
  }
}
    
export default filterMovies;
