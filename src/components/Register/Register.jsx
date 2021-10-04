import React, { useEffect } from 'react';
import './Register.css';

import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Register({ onRegistration, authErrorMessage, resetAuthErrorMessage }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation({});

  useEffect(() => {
    resetAuthErrorMessage();
  }, [values]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegistration(values);
  }

  const INPUTS_DATA = [
    {
      key: 1,
      type: 'text',
      id: 'signin-name',
      label: 'Имя',
      placeholder: 'Имя',
      name: 'name',
      required: true,
      pattern: '[a-zA-Z -]{2,30}',
      customErrorMessage: 'Пожалуйста, используйте только латинские буквы, пробел и дефис',
    },
    {
      key: 2,
      type: 'email',
      id: 'signin-email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
    },
    {
      key: 3,
      type: 'password',
      id: 'signin-password',
      label: 'Пароль',
      placeholder: 'Пароль',
      name: 'password',
      minLength: 8,
      required: true,
    },
  ]

  return (
    <div className="register">
      <LogoLink
        logoLinkModifier="logo-link_place_form"
      />
      <AuthForm
        name="signup-form"
        heading="Добро пожаловать!"
        inputsData={INPUTS_DATA}
        authErrorModifier="auth-error_place_singup"
        authErrorMessage={authErrorMessage}
        buttonText="Зарегистрироваться"
        formText="Уже зарегистрированы?"
        linkPath="/signin"
        linkText=" Войти"
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={values}
        errors={errors}
        isValid={isValid}
      />
    </div>
  )
}

export default Register;
