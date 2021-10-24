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
      label: 'Email',
      placeholder: 'Email',
      name: 'email',
      required: true,
      pattern: patterns.EMAIL,
      customErrorMessage: customErrorMessages.EMAIL,
    },
    {
      key: 2,
      type: 'password',
      id: 'login-password',
      label: 'Password',
      placeholder: 'Password',
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
        heading="Log in"
        inputsData={INPUTS_DATA}
        submitGroupModifier="submit-group_place_login"
        errorMessage={authErrorMessage}
        submitButtonText={submitButtonText}
        formText="Not a member yet?"
        linkPath="/signup"
        linkText=" Sign up here!"
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

