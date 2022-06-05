import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navigation() {
  return (
    <div className="nav-container d-flex justify-content-between align-items-center">
      <div style={{ display: 'inline' }}>
        {/* Logo */}
        <a href="#">
          <h3 className="alt-font logo">
            {'{'}
            <span className="l">l</span>
            <span className="g">g</span>
            {'}'}
          </h3>
        </a>

        {/* Navigation */}
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

      {/* Social Media Links */}
      <div>
        <a href="https://www.linkedin.com/in/laurenlgoss/" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
        </a>
        <a
          href="https://github.com/laurenlgoss"
          target="_blank"
          className="github-icon"
        >
          <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
        </a>
      </div>
    </div>
  );
}

export default Navigation;
