import React from 'react';
import './CloseButton.css';

function CloseButton({ classNameModifier, onClose }) {
  const closeButtonClassName = (
    `close-btn ${!classNameModifier ? '' : classNameModifier}`
  );

  return (
    <button 
      className={closeButtonClassName}
      type="button"
      aria-label="Close menu"
      onClick={onClose}
    />
  );
}
  
export default CloseButton;
