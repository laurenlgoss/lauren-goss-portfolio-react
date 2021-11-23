import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getBadgeColor from '../utils/badgeColor';

function Project({
  borderColor,
  columnSide,
  deployedApp,
  description,
  githubRepo,
  imgSrc,
  languages,
  lightIcons,
  title,
}) {
  return (
    <div
      className={`card project-card${
        borderColor === 'yellowGreen' ? ' royg-border' : ' biv-border'
      }`}
      style={{ width: 'auto' }}
    >
      <div className="project-img-container">
        <img className="card-img-top" src={imgSrc} alt="Card image cap" />
        <div className="project-icons-container">
          <a
            href={githubRepo}
            target="_blank"
            className={`${lightIcons ? 'light' : ''}`}
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
          </a>
          {deployedApp ? (
            <a
              href={deployedApp}
              target="_blank"
              className={`${lightIcons ? 'light' : ''}`}
            >
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="3x" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={`${columnSide === 'left' ? 'text-right' : ''}`}>
        <h4 className="project-title">{title}</h4>
        <p className="alt-font">{description}</p>
        <div
          className={`${columnSide === 'left' ? ' text-right' : ' text-left'}`}
        >
          {languages.map((language) => {
            const badgeColor = getBadgeColor(language);

            return (
              <span class={`badge badge-pill ${badgeColor}`}>{language}</span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
