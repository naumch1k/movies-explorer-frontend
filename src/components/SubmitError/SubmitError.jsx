import React from 'react';
import './SubmitError.css';

function SubmitError({ errorMessage }) {
  return (
    <p className="submit-error">
      {errorMessage}
    </p>
  )
}

export default SubmitError;
