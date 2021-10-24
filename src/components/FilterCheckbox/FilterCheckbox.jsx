import './FilterCheckbox.css'

function FilterCheckbox({ onChange }) {
  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        Short Films
        <input
          className="filter-checkbox__input"
          type="checkbox"
          name="shortfilm"
          onChange={onChange}
        />
        <span className="filter-checkbox__slider"/>
      </label>
    </div>

  )
}

export default FilterCheckbox;
