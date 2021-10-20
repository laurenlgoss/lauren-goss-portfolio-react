import React from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';

function ProjectsContainer() {
  return (
    <div id="projects">
      <div className="row justify-content-between featured-project">
        <h1 className="section-title" id="projects-title">
          projects
        </h1>
        <FeaturedProject />
      </div>

      <div className="row justify-content-around projects">
        <div className="col-md-6">
          <Project />
          <Project />
        </div>
        <div className="col-md-6">
          <Project />
          <Project />
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
