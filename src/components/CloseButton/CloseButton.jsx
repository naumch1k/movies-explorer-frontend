import React from 'react';
import './CloseButton.css';

function CloseButton({ className, onClose }) {
  return (
    <button 
      className={`close-btn ${className}`}
      type="button"
      aria-label="Закрыть меню"
      onClick={onClose}
    />
  );
}
  
export default CloseButton;
