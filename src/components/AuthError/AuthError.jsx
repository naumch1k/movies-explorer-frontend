import React from 'react';
import './AuthError.css';

function AuthError({ classNameModifier, errorMessage }) {
  const authErrorClassName = (
    `auth-error ${!classNameModifier ? '' : classNameModifier}`
  );

  return (
    <p className={authErrorClassName}>
      {errorMessage}
    </p>
  )
}

export default AuthError;
