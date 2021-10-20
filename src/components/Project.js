import React from 'react';

function Project({
  borderColor,
  columnSide,
  deployedApp,
  description,
  githubRepo,
  imgSrc,
  languages,
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
          <a href={githubRepo} target="_blank">
            <i className="fab fa-3x fa-github"></i>
          </a>
          {deployedApp ? (
            <a href={deployedApp} target="_blank">
              <i className="fas fa-3x fa-external-link-alt"></i>
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className={`${columnSide === 'right' ? 'text-right' : ''}`}>
        <h4 className="project-title">{title}</h4>
        <p className="alt-font">{description}</p>
        <ul
          className={`fa-ul custom-list${
            columnSide === 'right' ? ' text-right' : ' text-left'
          }`}
        >
          {languages.map((language) => {
            return (
              <li className="alt-font">
                <span className="fa-li">
                  <i className="fas fa-check"></i>
                </span>
                {language}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Project;
