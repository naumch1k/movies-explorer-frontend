import React from 'react';
import './Login.css';

import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';

const INPUTS_DATA = [
  {
    key: 1,
    type: 'email',
    id: 'login-email',
    label: 'E-mail',
    placeholder: 'E-mail',
    name: 'email',
    errorId: "login-email-error",
    required: true,
  },
  {
    key: 2,
    type: 'password',
    id: 'login-password',
    label: 'Пароль',
    placeholder: 'Пароль',
    name: 'password',
    errorId: "login-password-error",
    minLength: 8,
    required: true,
  },
]

function Login() {
  return (
    <div className="login">
      <LogoLink 
        logoLinkModifier="logo-link_place_form"
      />
      <AuthForm
        name="login-form"
        heading="Рады видеть!"
        inputsData={INPUTS_DATA}
        submitButtonModifier="auth-form__submit-btn_place_login"
        buttonText="Войти"
        formText="Ещё не зарегистрированы?"
        linkPath="/signup"
        linkText=" Регистрация"
      />
    </div>
  )
}

export default Login;
