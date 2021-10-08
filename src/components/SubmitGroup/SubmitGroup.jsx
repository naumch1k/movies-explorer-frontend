import React from 'react';
import './SubmitGroup.css';

import SubmitError from '../SubmitError/SubmitError';
import SubmitButton from '../SubmitButton/SubmitButton';

function SubmitGroup({
  classNameModifier,
  errorMessage,
  buttonText,
  buttonDisabled,
  }) {
  const submitGroupClassName = (
    `submit-group ${!classNameModifier ? '' : classNameModifier}`
  );

  return (
    <div className={submitGroupClassName}>
      <SubmitError
        errorMessage={errorMessage}
      />
      <SubmitButton
        text={buttonText}
        disabled={buttonDisabled}
      />
    </div>
  )
}

export default SubmitGroup;
