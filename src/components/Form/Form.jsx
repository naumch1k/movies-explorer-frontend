import React from 'react';
import './Form.css';
import { Link } from 'react-router-dom';

function Form({ 
  name,
  heading,
  inputsData,
  submitButtonModifier,
  buttonText,
  formText,
  linkPath,
  linkText
}) {

  const submitButtonClassName = (
    `form__submit-btn ${!submitButtonModifier ? '' : submitButtonModifier}`
  );

  return (
    <form className="form" name={name}>
      <h2 className="form__heading">{heading}</h2>
      <fieldset className="form__items">
        {inputsData.map((item) => (
          <div className="form__item-container" key={item.key}>
            <label className="form__label" htmlFor={item.id}>{item.label}</label>
            <input
              className={`form__item form__item_el_${item.name}`}
              id={item.id}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              minLength={item.minLength}
              maxLength={item.maxLength }
              required={item.required}
            />
            <p className="form__error" id={item.errorId}>{/* Что-то пошло не так... */}</p>
          </div>
        ))}
      </fieldset>
      <button className={submitButtonClassName} type="submit">{buttonText}</button>
      <p className="form__text">
        {formText}
        <Link className="form__link" to={linkPath}>{linkText}</Link>
      </p>
    </form>
  )
}

export default Form;
