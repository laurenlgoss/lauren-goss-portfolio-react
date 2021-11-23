import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getBadgeColor from '../utils/badgeColor';

function FeaturedProject({
  deployedApp,
  description,
  githubRepo,
  imgSrc,
  languages,
  lightIcons,
  title,
}) {
  return (
    <>
      <div className="col-lg-6 text-right">
        <h4 className="project-title">{title}</h4>
        <p className="alt-font">{description}</p>
        <div className="text-right">
          {languages.map((language) => {
            const badgeColor = getBadgeColor(language);

            return (
              <span class={`badge badge-pill ${badgeColor}`}>{language}</span>
            );
          })}
        </div>
      </div>
      <div className="col-lg-5">
        <div
          className="feat-proj-img-container"
          style={{ position: 'relative' }}
        >
          <img className="img-fluid" src={imgSrc} alt={`${title} dashboard`} />
          <div className="project-icons-container">
            <a
              href={githubRepo}
              target="_blank"
              className={`${lightIcons ? 'light' : ''}`}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
            </a>
            <a
              href={deployedApp}
              target="_blank"
              className={`${lightIcons ? 'light' : ''}`}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="3x" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
