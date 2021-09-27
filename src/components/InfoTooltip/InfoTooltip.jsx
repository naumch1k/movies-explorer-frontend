import React from 'react';
import './InfoTooltip.css';

import CloseButton from '../CloseButton/CloseButton';

function InfoTooltip({ isOpen, onClose }) {
  return (
    <div className={`popup ${isOpen && 'popup_opened'}`}>
      <div className="popup__container">
        <p className="popup__message">
          Тут будет сообщение
        </p>
        <CloseButton 
          classNameModifier="close-btn_place_info-tooltip"
          onClose={onClose}
        />
      </div>
    </div>
  )
}

export default InfoTooltip;
