import React from 'react';
import './Promo.css'
import { Link } from 'react-router-dom';

import PromoImage from '../../images/promo-image.png';

function Promo() {
  return(
    <section className="promo main__section">
      <div className="promo__container main__section-container main__section-container_size_xs">
        <div className="promo__main-content">
          <h1 className="promo__title">Учебный проект студента факультета Веб&#8209;разработки.</h1>
          <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и&nbsp;его создателя.</p>
          <Link
            className="promo__link"
            to={{ pathname: '#project' }}
            target="_top"
          >
            Узнать больше
          </Link>
        </div>
        <img
          className="promo__illustration"
          src={PromoImage}
          alt="Изображение шапки"
        />
      </div>
    </section>
  )
}

export default Promo;
