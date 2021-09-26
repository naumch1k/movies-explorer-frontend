import React from 'react';
import './SubmitButton.css';

function SubmitButton({ classNameModifier, disabled, textContent }) {
  const submitButtonClassName = (
    `submit-btn ${!classNameModifier ? '' : classNameModifier}`
  );

  return (
    <button
      className={submitButtonClassName}
      type="submit"
      disabled={disabled}
    >
      {textContent}
    </button>
  )
}

export default SubmitButton;
