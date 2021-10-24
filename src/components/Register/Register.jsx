import React, { useEffect } from 'react';
import './Register.css';

import LogoLink from '../LogoLink/LogoLink';
import AuthForm from '../AuthForm/AuthForm';

import useFormWithValidation from '../../hooks/useFormWithValidation';
import { patterns, customErrorMessages } from '../../utils/constants';

function Register({
  submitButtonText,
  onRegistration,
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
    onRegistration(values);
  }

  const INPUTS_DATA = [
    {
      key: 1,
      type: 'text',
      id: 'signin-name',
      label: 'Username',
      placeholder: 'Enter your username',
      name: 'name',
      required: true,
      pattern: patterns.NAME,
      customErrorMessage: customErrorMessages.NAME,
    },
    {
      key: 2,
      type: 'email',
      id: 'signin-email',
      label: 'Email',
      placeholder: 'Enter email',
      name: 'email',
      required: true,
      pattern: patterns.EMAIL,
      customErrorMessage: customErrorMessages.EMAIL,
    },
    {
      key: 3,
      type: 'password',
      id: 'signin-password',
      label: 'Password',
      placeholder: 'Enter password',
      name: 'password',
      minLength: 8,
      required: true,
      customErrorMessage: customErrorMessages.PASSWORD,
    },
  ]

  return (
    <div className="register">
      <LogoLink
        logoLinkModifier="logo-link_place_form"
      />
      <AuthForm
        name="signup-form"
        heading="Sign up"
        inputsData={INPUTS_DATA}
        submitGroupModifier="submit-group_place_singup"
        errorMessage={authErrorMessage}
        submitButtonText={submitButtonText}
        formText="Already a member?"
        linkPath="/signin"
        linkText=" Log in here!"
        onChange={handleChange}
        onSubmit={handleSubmit}
        values={values}
        errors={errors}
        isValid={isValid}
      />
    </div>
  )
}

export default Register;
