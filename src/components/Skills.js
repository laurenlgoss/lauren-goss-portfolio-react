import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills({ category, skills }) {
  return (
    <div className="card skills-card">
      <div className="skills-card-header text-center mx-auto">
        <div
          className={`skills-icon${
            category === 'backend' ? ' backend-push' : ''
          }${category === 'other' ? ' other-push' : ''}`}
        >
          {category === 'frontend' ? (
            <FontAwesomeIcon icon={['fas', 'desktop']} size="2x" />
          ) : (
            <></>
          )}
          {category === 'backend' ? (
            <FontAwesomeIcon icon={['fas', 'database']} size="2x" />
          ) : (
            <></>
          )}
          {category === 'other' ? (
            <FontAwesomeIcon icon={['fas', 'tools']} size="2x" />
          ) : (
            <></>
          )}
        </div>
        <h5 className="alt-font">{category}</h5>
      </div>
      <ul className="fa-ul mx-auto custom-list">
        {skills.map((skill) => {
          return (
            <li className="alt-font">
              <span className="fa-li">
                <FontAwesomeIcon icon={['fas', 'check']} />
              </span>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Skills;
