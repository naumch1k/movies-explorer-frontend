import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';

function SearchForm() {
  return (
    <form className="search-form">
      <fieldset className="search-form__container">
        <label className="search-form__label" htmlFor="search-form-movie">
          <SearchIcon
            className="search-form__label-icon"
            fill="currentColor"
          />
        </label>
        <input
          className="search-form__item"
          id="search-form-movie"
          type="text"
          placeholder="Фильм"
          required
        />
        <button
          className="search-form__submit-btn"
          type="submit"
          aria-label="Найти фильмы"
        >
          <SearchIcon
            className="search-form__submit-btn-icon"
            fill="currentColor"
          />
        </button>
        <FilterCheckbox />
      </fieldset>
    </form>
  )
}
  
export default SearchForm;
