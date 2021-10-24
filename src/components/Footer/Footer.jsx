import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom'; 

function Footer() {
  const FOOTER_LINKS = [
    {
      title: 'Yandex.Prakticum',
      link: 'https://practicum.yandex.com',
    },
    {
      title: 'GitHub',
      link: 'https://github.com/naumch1k',
    },
    {
      title: 'Facebook',
      link: 'https://www.linkedin.com/in/naumch1k/',
    },
  ];

  return (
    <footer className="footer page__footer">
      <div className="footer__container">
        <p className="footer__title">Portfolio Project Yandex.Prakticum х BeatFilm.</p>
        <div className="footer__content">
          <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
          <ul className="footer__links">
            {FOOTER_LINKS.map((item, index) => (
              <li
                key={index}
              >
                <Link 
                  className="footer__link"
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
    </footer>
  );
}

export default Footer;
