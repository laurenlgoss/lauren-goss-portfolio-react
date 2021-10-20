import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  return (
    <div className="nav-container">
      <div className="row">
        <div className="col-3 left-header">
          <div className="row left-nav">
            <div className="col align-self-end">
              <a
                href="https://www.linkedin.com/in/laurenlgoss/"
                target="_blank"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x"/>
              </a>
              <a
                href="https://github.com/laurenlgoss"
                target="_blank"
                className="github-icon"
              >
                <FontAwesomeIcon icon={['fab', 'github']} size="2x"/>
              </a>
            </div>
          </div>
        </div>
        <div className="col-9 right-header">
          <div className="row text-right right-nav">
            <div className="col align-self-center">
              <a href="#about-me" id="about-me-nav">
                .about()
              </a>
              <a href="#projects" id="projects-nav">
                .projects()
              </a>
              <a href="#contact" id="contact-nav">
                .contact()
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
