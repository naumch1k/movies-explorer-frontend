import React from 'react';
import { Link } from 'react-router-dom'; 

function Portfolio(){
    return(
      <section className="portfolio">
        <h2 className="portfolio__title">Портфолио</h2>
        <ul className="">
          <li className="">
            <Link
              className=""
              to={{ pathname: 'https://naumch1k.github.io/how-to-learn/' }}
              target="_blank"
            >
              <h3 className="">Статичный сайт</h3>
              <span className="">&#8599;</span>
            </Link>
          </li>
          <li className="">
            <Link
              className=""
              to={{ pathname: 'https://naumch1k.github.io/russian-travel/' }}
              target="_blank"
            >
              <h3 className="">Адаптивный сайт</h3>
              <span className="">&#8599;</span>
            </Link>
          </li>
          <li className="">
            <Link
              className=""
              to={{
                pathname: 'https://naumch1k.students.nomoredomains.rocks/',
              }}
              target="_blank"
            >
              <h3 className="">Одностраничное приложение</h3>
              <span className="">&#8599;</span>
            </Link>
          </li>
        </ul>
    </section>
    )
  }
  
export default Portfolio;
  