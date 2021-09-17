import React from 'react';
import './Login.css';

import LogoLink from '../LogoLink/LogoLink';
import Form from '../Form/Form';

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
    <main className="login__container">
      <LogoLink 
        logoLinkModifier="_place_form"
      />
      <Form
        name="login-form"
        heading="Рады видеть!"
        inputsData={INPUTS_DATA}
        buttonModifier="_place_login"
        buttonText="Войти"
        formText="Ещё не зарегистрированы?"
        linkPath="/signup"
        linkText=" Регистрация"
      />
    </main>
  )
}

export default Login;
