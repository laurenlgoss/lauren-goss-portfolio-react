import React from 'react';

function Skills({ category, skills }) {
  return (
    <div className="card skills-card">
      <div className="skills-card-header text-center mx-auto">
        <div className={`skills-icon${(category === 'backend' ? ' backend-push' : '')}${(category === 'other' ? ' other-push' : '')}`}>
          <i className="fas fa-2x fa-desktop frontend-icon"></i>
        </div>
        <h5 className="alt-font">{category}</h5>
      </div>
      <ul className="fa-ul mx-auto custom-list">
        {skills.map((skill) => {
          return (
            <li className="alt-font">
              <span className="fa-li">
                <i className="fas fa-check"></i>
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
