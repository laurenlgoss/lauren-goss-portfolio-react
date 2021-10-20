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
      <div class="col-md-6 text-right">
        <h4 class="project-title">{title}</h4>
        <p class="alt-font">{description}</p>
        <ul class="fa-ul text-left custom-list">
          {languages.map((language) => {
            return (
              <li class="alt-font">
                <span class="fa-li">
                  <i class="fas fa-check"></i>
                </span>
                {language}
              </li>
            );
          })}
        </ul>
      </div>
      <div class="col-md-5">
        <div class="feat-proj-img-container" style={{ position: 'relative;' }}>
          <img
            class="img-fluid"
            src={imgSrc}
          />
          <div class="project-icons-container">
            <a
              href={githubRepo}
              target="_blank"
            >
              <i class="fab fa-3x fa-github"></i>
            </a>
            <a
              href={deployedApp}
              target="_blank"
            >
              <i class="fas fa-3x fa-external-link-alt"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedProject;
