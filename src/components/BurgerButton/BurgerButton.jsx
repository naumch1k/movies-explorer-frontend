import React from 'react';
import './BurgerButton.css';

function BurgerButton({ onOpenMenu }) {
  return (
    <button
      className="burger-btn"
      type="button"
      onClick={onOpenMenu}
      aria-label="Открыть меню"
    />
  );
}
  
export default BurgerButton;
