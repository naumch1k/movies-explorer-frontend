import React from 'react';
import './Portfolio.css';
import { Link } from 'react-router-dom'; 

function Portfolio() {
  const PORTFOLIO_LINKS = [
    {
      title: 'Static Website',
      link: 'https://naumch1k.github.io/how-to-learn/',
    },
    {
      title: 'Responsive Website',
      link: 'https://naumch1k.github.io/russian-travel/',
    },
    {
      title: 'Single Page Application',
      link: 'https://naumch1k.students.nomoredomains.rocks/',
    },
  ];

  return(
    <div className="portfolio">
      <h3 className="portfolio__title">Projects</h3>
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
  