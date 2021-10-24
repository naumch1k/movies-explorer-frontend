import './Techs.css';

import SectionTitle from '../SectionTitle/SectionTitle';

function Techs() {
  const TECHS_LIST_ITEMS = ['HTML', 'CSS', 'JS', 'React', 'Git', 'Express.js', 'mongoDB'];

  return(
    <section className="techs main__section">
      <div className="main__section-container main__section-container_size_m">
        <SectionTitle
          title="Techs"
        />
        <div className="techs__content">
          {/* <h2 className="techs__subtitle">7 технологий</h2> */}
          <p className="techs__text">
          Practicum's Web Developer program is devoted to learning the following technologies, which were used to build this project
          </p>
        </div>
        <ul className="techs__list">
          {TECHS_LIST_ITEMS.map((item, index) => (
            <li className="techs__list-item" key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
  
export default Techs;
  