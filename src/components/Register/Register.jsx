import React from 'react';
import { Link } from 'react-router-dom'; 

function Navigation() {
  return (
    <form className="form" name="signup-form">
      <h2 className="form__heading">Добро пожаловать!</h2>
      <fieldset className="form__items">

        <label class="form__label" for="name">Имя</label>
        <input 
          className="form__item form__item_el_name"
          id="name"
          type="text"
          name="name"
          required
        />
        <p className="form__error" id="name-error"></p>

        <label class="form__label" for="email">E-mail</label>
        <input 
          className="form__item form__item_el_email"
          id="email"
          type="email"
          name="email"
          required
        />
        <p className="form__error" id="email-error"></p>

        <label class="form__label" for="password">Пароль</label>
        <input 
          className="form__item form__item_el_password"
          id="password"
          type="password"
          name="password"
          required
        />
        <p className="form__error" id="password-error"></p>

      </fieldset>
      <button className="form__submit-btn" type="submit">Зарегистрироваться</button>
      <p className="form__text">
        Уже зарегистрированы?
        <Link to="/signin" className="form__link"> Войти</Link>
      </p>
    </form>
  );
}

export default Navigation;
