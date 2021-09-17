import './FilterCheckbox.css'

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        Короткометражки
        <input
          className="filter-checkbox__input"
          type="checkbox"
        />
        <span className="filter-checkbox__slider"/>
      </label>
    </div>

  )
}

export default FilterCheckbox;
