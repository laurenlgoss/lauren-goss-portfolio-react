import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function FeaturedProject({
  deployedApp,
  description,
  githubRepo,
  imgSrc,
  languages,
  title,
}) {
  return (
    <>
      <div className="col-md-6 text-right">
        <h4 className="project-title">{title}</h4>
        <p className="alt-font">{description}</p>
        <ul className="fa-ul text-left custom-list">
          {languages.map((language) => {
            return (
              <li className="alt-font">
                <span className="fa-li">
                  <FontAwesomeIcon icon={['fas', 'check']}/>
                </span>
                {language}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="col-md-5">
        <div
          className="feat-proj-img-container"
          style={{ position: 'relative' }}
        >
          <img className="img-fluid" src={imgSrc} />
          <div className="project-icons-container">
            <a href={githubRepo} target="_blank">
            <FontAwesomeIcon icon={['fab', 'github']} size="3x"/>
            </a>
            <a href={deployedApp} target="_blank">
            <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="3x"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
