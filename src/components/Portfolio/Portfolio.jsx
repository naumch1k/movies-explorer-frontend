import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom'; 

function Portfolio() {
  const PORTFOLIO_LINKS = [
    {
      title: 'Статичный сайт',
      link: 'https://naumch1k.github.io/how-to-learn/',
    },
    {
      title: 'Адаптивный сайт',
      link: 'https://naumch1k.github.io/russian-travel/',
    },
    {
      title: 'Одностраничное приложение',
      link: 'https://naumch1k.students.nomoredomains.rocks/',
    },
  ];

  return(
    <div className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__links">
        {PORTFOLIO_LINKS.map((item, index) => (
          <li 
            className="portfolio__links-item"
            key={index}
          >
            <Link 
              className="portfolio__link"
              to={{ pathname: item.link }}
              target="_blank"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
  
export default Portfolio;
  