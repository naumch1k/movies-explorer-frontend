function AboutProject(){
  return(
    <section className="project" id="project">
      <h2 className="project__title">О проекте</h2>
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

      <ul>
        <li>
          <p>1 неделя</p>
          <p>Back-end</p>
        </li>
        <li>
          <p>4 недели</p>
          <p>Front-end</p>
        </li>
      </ul>
    </section>
  )
}

export default AboutProject;
