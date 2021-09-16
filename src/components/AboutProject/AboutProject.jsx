import './AboutProject.css';

import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return(
    <section className="project section" id="project">
      <div className="section__container section__container_size_narrow">
        <SectionTitle 
          title="О проекте"
        />
        <ul className="project-desc">
          <li className="project-desc__cell">
            <h3 className="project-desc__heading">Дипломный проект включал 5 этапов</h3>
            <p className="project-desc__text">
              Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
            </p>
          </li>
          <li className="project-desc__cell">
            <h3 className="project-desc__heading">На выполнение диплома ушло 5 недель</h3>
            <p className="project-desc__text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
            </p>
          </li>
        </ul>
  
        <ul className="project-timing">
          <li className="project-timing__cell">
            <p className="project-timing__heading project-timing__heading_accent">1 неделя</p>
            <p className="project-timing__text">Back-end</p>
          </li>
          <li className="project-timing__cell">
            <p className="project-timing__heading">4 недели</p>
            <p className="project-timing__text">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutProject;
