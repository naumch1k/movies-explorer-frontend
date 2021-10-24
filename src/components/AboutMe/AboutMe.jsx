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
    <section className="about-me main__section">
      <div className="main__section-container main__section-container_size_s">
        <SectionTitle 
          title="Author"
        />
        <div className="about-me__content">
          <img
            className="about-me__image"
            src={AboutMeImage}
            alt="Author's personal pic"
          />
          <div className="about-me__student">
            <div className="about-me__bio">
            <h2 className="about-me__subtitle">Irina Naumchik</h2>
              <p className="about-me__headline">
                Web-Developer, Chicago
              </p>
              <p className="about-me__text">
                Web Dev learner, natural problem solver with an inborn curiosity for how and why things work. Passionate and driven by constant self-growth, and eager to help companies become successful.
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
  