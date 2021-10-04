import React, { useEffect } from 'react';
import './Login.css';

import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';
import useFormWithValidation from '../../hooks/useFormWithValidation';

function Login({ onLogin, authErrorMessage, resetAuthErrorMessage }) {
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
    onLogin(values);
  }

  const INPUTS_DATA = [
    {
      key: 1,
      type: 'email',
      id: 'login-email',
      label: 'E-mail',
      placeholder: 'E-mail',
      name: 'email',
      required: true,
    },
    {
      key: 2,
      type: 'password',
      id: 'login-password',
      label: 'Пароль',
      placeholder: 'Пароль',
      name: 'password',
      minLength: 8,
      required: true,
    },
  ]

  return (
    <div className="login">
      <LogoLink 
        logoLinkModifier="logo-link_place_form"
      />
      <AuthForm
        name="login-form"
        heading="Рады видеть!"
        inputsData={INPUTS_DATA}
        authErrorMessage={authErrorMessage}
        authErrorModifier="auth-error_place_login"
        buttonText="Войти"
        formText="Ещё не зарегистрированы?"
        linkPath="/signup"
        linkText=" Регистрация"
        onSubmit={handleSubmit}
        onChange={handleChange}
        values={values}
        errors={errors}
        isValid={isValid}
      />
    </div>
  )
}

export default Login;

