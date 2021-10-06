import './SearchForm.css'
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

import useFormWithValidation from '../../hooks/useFormWithValidation';

import { ReactComponent as SearchIcon } from '../../images/search-icon.svg';

function SearchForm({ onSubmit }) {
  const {
    values,
    handleChange,
  } = useFormWithValidation({});

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const handleCheckboxChange = (e) => {
    const checkbox = e.target;
    values.shortfilm = checkbox.checked;
  }

  return (
    <section className="search-form main__section">
      <div className="search-form__container main__section-container main__section-container_size_xs">
        <form onSubmit={handleSubmit} className="search-form__content">
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
              placeholder="Фильм"
              required
              onChange={handleChange}
            />
          </label>
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
          <FilterCheckbox 
            onChange={handleCheckboxChange}
          />
        </form>
      </div>
    </section>
  )
}
  
export default SearchForm;
