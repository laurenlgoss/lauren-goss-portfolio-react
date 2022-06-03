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
  myRole,
  numOfGroupMembers,
  title,
}) {
  return (
    <>
      <div className="col-lg-6 text-end">
        <h4 className="project-title">{title}</h4>
        <p className="alt-font">{description}</p>
        <p>
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
          <span className={`badge badge-pill default-pill`}>
            {numOfGroupMembers > 1 ? 'Collaborative' : 'Solo'}
          </span>
          {/* {myRole ? myRole : null} */}
        </p>
        <div className="text-end">
          {languages.map((language) => {
            return (
              <span className={`badge badge-pill ${getBadgeColor(language)}`}>
                {language}
              </span>
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
