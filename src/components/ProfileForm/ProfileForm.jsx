import React, { useContext } from "react";
import './ProfileForm.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import SubmitButton from "../SubmitButton/SubmitButton";

function ProfileForm({ inputsData, submitButtonModifier, buttonText, isBeingEdited, onEditProfile }) {
  const currentUser = useContext(CurrentUserContext);

  return (
    <form className="profile-form">
      <h2 className="profile-form__heading">Привет, {currentUser.name}!</h2>
      <fieldset className="profile-form__items">
        {inputsData.map((item) => (
          <div className="profile-form__item-container" key={item.key}>
            <label className="profile-form__label" htmlFor={item.id}>{item.label}</label>
            <input
              className={`profile-form__item profile-form__item_el_${item.name}`}
              id={item.id}
              type={item.type}
              name={item.name}
              value={item.value}
              onChange={item.onChange}
              placeholder={item.placeholder}
              minLength={item.minLength}
              maxLength={item.maxLength}
              required={item.required}
            />
            <p className="profile-form__error" id={item.errorId}>{/* Что-то пошло не так... */}</p>
          </div>
        ))}
      </fieldset>
      {isBeingEdited ? (
        <div className="profile-form__btns">
          <SubmitButton 
            classNameModifier={submitButtonModifier}
            textContent={buttonText}
            disabled={true}
          />
        </div>
      ) : (
        <div className="profile-form__btns">
          <button
            type="button"
            className="profile-form__btn profile-form__btn_use_edit"
            onClick={onEditProfile}
          >
            Редактировать
          </button>
          <button
            type="button"
            className="profile-form__btn profile-form__btn_use_signout"
          >
            Выйти из аккаунта
          </button>
        </div>
      )
      }



    </form>
  )
}

export default ProfileForm;
