import { useState, useEffect } from 'react';
import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';

function SearchForm({ onCheckboxChange, onSubmit }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setErrorMessage('');
  }, [searchQuery]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchQuery) {
      setErrorMessage('Field cannot be empty');
      return;
    }

    onSubmit(searchQuery);
  };

  const handleSearchQueryChange = (e) => {
    const target = e.target;
    setSearchQuery(target.value);
  }

  const handleCheckboxChange = (e) => {
    const target = e.target;
    onCheckboxChange(target.checked);
  }

  return (
    <section className="search-form main__section">
      <div className="search-form__container main__section-container main__section-container_size_xs">
        <form onSubmit={handleSubmit} className="search-form__content" name="search-form" noValidate>
          <label className="search-form__label" htmlFor="search-form-movie">
            <SearchIcon
              className="search-form__label-icon"
              fill="currentColor"
            />
            <input
              className="search-form__item"
              id="search-form-movie"
              type="text"
              name="keyword"
              placeholder="Enter keyword"
              required
              onChange={handleSearchQueryChange}
            />
            <p className="search-form__item-error">
              {errorMessage}
            </p>
          </label>
          <button
            className="search-form__submit-btn"
            type="submit"
            aria-label="Search movies"
          >
            <SearchIcon
              className="search-form__submit-btn-icon"
              fill="currentColor"
            />
          </button>
          <FilterCheckbox 
            onChange={handleCheckboxChange}
          />
        </form>
      </div>
    </section>
  )
}
  
export default SearchForm;
