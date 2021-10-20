import React from 'react';

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
                  <i className="fas fa-check"></i>
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
              <i className="fab fa-3x fa-github"></i>
            </a>
            <a href={deployedApp} target="_blank">
              <i className="fas fa-3x fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
