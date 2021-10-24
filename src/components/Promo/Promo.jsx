import React from 'react';
import './Promo.css'
import { Link } from 'react-router-dom';

import PromoImage from '../../images/promo-image.png';

function Promo() {
  return(
    <section className="promo main__section">
      <div className="promo__container main__section-container main__section-container_size_xs">
        <div className="promo__main-content">
          <h1 className="promo__title">Welcome to Movies&nbsp;Explorer</h1>
          <p className="promo__text">The final project at Yandex.Practicum, Web Development program.</p>
          <p className="promo__text">Movies Explorer is an online app that allows to look up movies and save them in your personal account.</p>
          <Link
            className="promo__link"
            to={{ pathname: '#project' }}
            target="_top"
          >
            Check it out
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
