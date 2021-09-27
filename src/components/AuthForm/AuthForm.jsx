import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';

import SubmitButton from '../SubmitButton/SubmitButton';

function AuthForm({ 
  name,
  heading,
  inputsData,
  submitButtonModifier,
  buttonText,
  formText,
  linkPath,
  linkText
}) {

  return (
    <form className="auth-form" name={name}>
      <h2 className="auth-form__heading">{heading}</h2>
      <fieldset className="auth-form__items">
        {inputsData.map((item) => (
          <div className="auth-form__item-container" key={item.key}>
            <label className="auth-form__label" htmlFor={item.id}>{item.label}</label>
            <input
              className={`auth-form__item auth-form__item_el_${item.name}`}
              id={item.id}
              type={item.type}
              name={item.name}
              placeholder={item.placeholder}
              minLength={item.minLength}
              maxLength={item.maxLength}
              required={item.required}
            />
            <p className="auth-form__error" id={item.errorId}>{/* Что-то пошло не так... */}</p>
          </div>
        ))}
      </fieldset>
      <SubmitButton
        classNameModifier={submitButtonModifier}
        textContent={buttonText}
        disabled={true}
      />
      <p className="auth-form__text">
        {formText}
        <Link className="auth-form__link" to={linkPath}>{linkText}</Link>
      </p>
    </form>
  )
}

export default AuthForm;
