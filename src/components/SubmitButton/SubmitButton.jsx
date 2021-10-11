import React from 'react';
import './SubmitButton.css';

function SubmitButton({ disabled, text }) {

  return (
    <button
      className='submit-btn'
      type="submit"
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default SubmitButton;
