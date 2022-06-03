import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import getBadgeColor from '../utils/badgeColor';

function Project({
  // borderColor,
  columnSide,
  deployedApp,
  description,
  githubRepo,
  imgSrc,
  languages,
  lightIcons,
  myRole,
  numOfGroupMembers,
  title,
}) {
  return (
    <div className="card project-card project-border" style={{ width: 'auto' }}>
      <div className="project-img-container">
        <img className="card-img-top" src={imgSrc} alt={`${title} dashboard`} />
        <div className="project-icons-container">
          <a
            href={githubRepo}
            target="_blank"
            className={`${lightIcons ? 'light' : ''}`}
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="3x" />
          </a>
          {deployedApp ? (
            <a
              href={deployedApp}
              target="_blank"
              className={`${lightIcons ? 'light' : ''}`}
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={['fas', 'external-link-alt']} size="3x" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={`${columnSide === 'left' ? 'text-end' : ''}`}>
        <h4 className="project-title">{title}</h4>
        <p className="alt-font">{description}</p>

        {/* Collaborative VS Solo */}
        <p>
          {columnSide === 'right' ? (
            <span className={`badge badge-pill default-pill`}>
              {numOfGroupMembers > 1 ? 'Collaborative' : 'Solo'}
            </span>
          ) : null}
          {[...Array(numOfGroupMembers)].map((element) => {
            return (
              <FontAwesomeIcon
                icon={['fas', 'user']}
                size="2x"
                className="mx-1"
                style={{ verticalAlign: 'middle' }}
              />
            );
          })}
          {columnSide === 'left' ? (
            <span className={`badge badge-pill default-pill`}>
              {numOfGroupMembers > 1 ? 'Collaborative' : 'Solo'}
            </span>
          ) : null}
          {/* {myRole ? myRole : null} */}
        </p>

        <div>
          {languages.map((language) => {
            return (
              <span className={`badge badge-pill ${getBadgeColor(language)}`}>
                {language}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
