import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="Фильм"
        />
        <button
          type="submit"
          aria-label="Найти фильмы"
        />
        <FilterCheckbox />
      </form>
    </section>
  )
}
  
export default SearchForm;
