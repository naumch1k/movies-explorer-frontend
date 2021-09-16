import React from 'react';
import './AboutMe.css';
import { Link } from 'react-router-dom';

import SectionTitle from '../SectionTitle/SectionTitle';
import Portfolio from '../Portfolio/Portfolio';

import AboutMeImage from '../../images/about-me-image.jpg';

function AboutMe() {
  const ABOUT_ME_LINKS = [
    {
      title: 'LinkedIn',
      link: 'https://www.linkedin.com/in/naumch1k/',
    },
    {
      title: 'Github',
      link: 'https://github.com/naumch1k',
    },
  ];

  return(
    <section className="about-me section">
      <div className="section__container section__container_size_medium">
        <SectionTitle 
          title="Студент"
        />
        <div className="about-me__content">
          <img
            className="about-me__image"
            src={AboutMeImage}
            alt="Личное фото"
          />
          <div className="about-me__student">
            <div className="about-me__bio">
            <h2 className="about-me__subtitle">Ирина</h2>
              <p className="about-me__headline">
                Фронтенд-разработчица, 30 лет
              </p>
              <p className="about-me__text">
                Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. 
                Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
                С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке,
                начал заниматься фриланс-заказами и ушёл с постоянной работы.
              </p>
            </div>
            <ul className="about-me__links">
              {ABOUT_ME_LINKS.map((item, index) => (
                <li
                  key={index}
                >
                  <Link
                    className="about-me__link"
                    to={{ pathname: item.link }}
                    target="_blank"
                    >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Portfolio />
      </div>
    </section>
  )
}
  
export default AboutMe;
  