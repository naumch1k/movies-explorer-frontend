import React from 'react';
import { Link } from 'react-router-dom'; 

import AboutMeImage from '../../images/about-me-image.jpg';

function AboutMe(){
    return(
      <section className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__columns">
        <div className="about-me__column">
          <img
            alt="Личное фото"
            src={AboutMeImage}
          />
        </div>
        <div className="about-me__column">
          <h2 className="about-me__column-heading">Ирина</h2>
          <h3 className="about-me__column-subheading">
            Фронтенд-разработчик, 30 лет
          </h3>
          <p className="about-me__column-text">
            Тутова что-нибудь про меня
          </p>
          <ul>
            <li>
              <Link
                className=""
                to={{ pathname: 'https://www.linkedin.com/in/naumch1k/' }}
                target="_blank"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link
                className=""
                to={{ pathname: 'https://github.com/naumch1k' }}
                target="_blank"
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
    )
  }
  
export default AboutMe;
  