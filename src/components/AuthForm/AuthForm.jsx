import React from 'react';
import './AuthForm.css';
import { Link } from 'react-router-dom';

import SubmitGroup from '../SubmitGroup/SubmitGroup';

function AuthForm({
  name,
  heading,
  inputsData,
  submitGroupModifier,
  errorMessage,
  submitButtonText,
  formText,
  linkPath,
  linkText,
  onChange,
  onSubmit,
  values,
  errors,
  isValid,
}) {

  return (
    <form onSubmit={onSubmit} className="auth-form" name={name} noValidate>
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
              onChange={onChange}
              value={values[item.name]}
              pattern={item.pattern}
            />
            <p className="auth-form__item-error">
              {errors[item.name]}
            </p>
          </div>
        ))}
      </fieldset>
      <SubmitGroup
        classNameModifier={submitGroupModifier}
        errorMessage={errorMessage}
        buttonText={submitButtonText}
        buttonDisabled={!isValid}
      />
      <p className="auth-form__text">
        {formText}
        <Link className="auth-form__link" to={linkPath}>{linkText}</Link>
      </p>
    </form>
  )
}

export default AuthForm;
