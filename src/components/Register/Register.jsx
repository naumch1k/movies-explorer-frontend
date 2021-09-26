import React from 'react';
import './Register.css';

import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';

const INPUTS_DATA = [
  {
    key: 1,
    type: 'text',
    id: 'signin-name',
    label: 'Имя',
    placeholder: 'Имя',
    name: 'name',
    errorId: "signin-name-error",
    minLength: 2,
    maxLength: 30,
    required: true,
  },
  {
    key: 2,
    type: 'email',
    id: 'signin-email',
    label: 'E-mail',
    placeholder: 'E-mail',
    name: 'email',
    errorId: "signin-email-error",
    required: true,
  },
  {
    key: 3,
    type: 'password',
    id: 'signin-password',
    label: 'Пароль',
    placeholder: 'Пароль',
    name: 'password',
    errorId: "signin-password-error",
    minLength: 8,
    required: true,
  },
]

function Register() {
  return (
    <div className="register">
      <LogoLink
        logoLinkModifier="logo-link_place_form"
      />
      <AuthForm
        name="signup-form"
        heading="Добро пожаловать!"
        inputsData={INPUTS_DATA}
        submitButtonModifier="submit-btn_place_singup"
        buttonText="Зарегистрироваться"
        formText="Уже зарегистрированы?"
        linkPath="/signin"
        linkText=" Войти"
      />
    </div>
  )
}

export default Register;
