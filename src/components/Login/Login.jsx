import React, { useEffect } from 'react';
import './Login.css';

import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';

import useFormWithValidation from '../../hooks/useFormWithValidation';
import { patterns, customErrorMessages } from '../../utils/constants';

function Login({
  submitButtonText,
  onLogin,
  authErrorMessage,
  resetFormErrorMessage,
  }) {
  const {
    values,
    errors,
    isValid,
    handleChange,
  } = useFormWithValidation({});

  useEffect(() => {
    resetFormErrorMessage();
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
      pattern: patterns.EMAIL,
      customErrorMessage: customErrorMessages.EMAIL,
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
      customErrorMessage: customErrorMessages.PASSWORD,
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
        submitGroupModifier="submit-group_place_login"
        errorMessage={authErrorMessage}
        submitButtonText={submitButtonText}
        formText="Ещё не зарегистрированы?"
        linkPath="/signup"
        linkText=" Регистрация"
        onChange={handleChange}
        onSubmit={handleSubmit}
        values={values}
        errors={errors}
        isValid={isValid}
      />
    </div>
  )
}

export default Login;

