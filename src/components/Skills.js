import React from 'react';

function Skills({ category, skills }) {
  return (
    <div class="card skills-card">
      <div class="skills-card-header text-center mx-auto">
        <div class="skills-icon">
          <i class="fas fa-2x fa-desktop frontend-icon"></i>
        </div>
        <h5 class="alt-font">{category}</h5>
      </div>
      <ul class="fa-ul mx-auto custom-list">
        {skills.map((skill) => {
          return (
            <li class="alt-font">
              <span class="fa-li">
                <i class="fas fa-check"></i>
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
