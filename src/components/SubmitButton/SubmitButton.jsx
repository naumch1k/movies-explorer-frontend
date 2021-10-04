import React from 'react';
import './SubmitButton.css';

function SubmitButton({ disabled, textContent }) {

  return (
    <button
      className='submit-btn'
      type="submit"
      disabled={disabled}
    >
      {textContent}
    </button>
  )
}

export default SubmitButton;
