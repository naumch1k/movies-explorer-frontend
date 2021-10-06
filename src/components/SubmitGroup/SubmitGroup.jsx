import React from 'react';
import './SubmitGroup.css';

import SubmitError from '../SubmitError/SubmitError';
import SubmitButton from '../SubmitButton/SubmitButton';

function SubmitGroup({ classNameModifier, errorMessage, buttonTextContent, buttonDisabled }) {
  const submitGroupClassName = (
    `submit-group ${!classNameModifier ? '' : classNameModifier}`
  );

  return (
    <div className={submitGroupClassName}>
      <SubmitError
        errorMessage={errorMessage}
      />
      <SubmitButton
        textContent={buttonTextContent}
        disabled={buttonDisabled}
      />
    </div>
  )
}

export default SubmitGroup;
