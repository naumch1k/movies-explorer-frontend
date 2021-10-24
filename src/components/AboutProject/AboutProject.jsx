import './AboutProject.css';

import SectionTitle from '../SectionTitle/SectionTitle';

function AboutProject() {
  return(
    <section className="project main__section" id="project">
      <div className="main__section-container main__section-container_size_m">
        <SectionTitle 
          title="About the Project"
        />
        <ul className="project-desc">
          <li className="project-desc__cell">
            <h3 className="project-desc__heading">The final project included 4 steps</h3>
            <p className="project-desc__text">
              Project planing, programming the server, JSX &amp; CSS, adding functionality
            </p>
          </li>
          <li className="project-desc__cell">
            <h3 className="project-desc__heading">The final project took 4 weeks to build</h3>
            <p className="project-desc__text">
              Every project part had a deadline and was reviewed by experienced (3+ years) code reviewers
            </p>
          </li>
        </ul>
  
        <ul className="project-timing">
          <li className="project-timing__cell">
            <p className="project-timing__heading project-timing__heading_accent">1 week</p>
            <p className="project-timing__text">Back-end</p>
          </li>
          <li className="project-timing__cell">
            <p className="project-timing__heading">3 weeks</p>
            <p className="project-timing__text">Front-end</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AboutProject;
