import React from 'react';
import { Link } from 'react-router-dom'; 

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
        <ul className="footer__links">
          <li>
            <Link
              className="footer__link"
              to={{ pathname: 'https://practicum.yandex.com' }}
              target="_blank"
            >
              Яндекс.Практикум
            </Link>
          </li>
          <li>
            <Link
              className="footer__link"
              to={{ pathname: 'https://github.com/naumch1k' }}
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              className="footer__link"
              to={{ pathname: 'https://www.linkedin.com/in/naumch1k/' }}
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
