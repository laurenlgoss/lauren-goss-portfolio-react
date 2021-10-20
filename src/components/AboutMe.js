import React from 'react';
import Skills from './Skills';

const frontendSkills = {
  category: 'frontend',
  skills: ['JavaScript', 'Node.js', 'jQuery', 'ReactJS', 'HTML/CSS'],
};

const backendSkills = {
  category: 'backend',
  skills: ['Express.js', 'ASP.NET/Visual Basic', 'MySQL/Sequelize', 'NoSQL/MongoDB/Mongoose', 'Handlebars.js'],
};

const otherSkills = {
  category: 'other',
  skills: ['Unit Testing', 'Model View Controller', 'Visual Studio Code', 'Wireframing', 'Bitbucket/Sourcetree'],
};

function AboutMe() {
  return (
    <div id="about-me">
      <div class="row" style={{ position: 'relative' }}>
        <h1 class="section-title" id="about-me-title">
          about
        </h1>
        <div class="col-8 offset-2">
          <p>
            I am presently residing in Hickory, NC. I graduated Summa Cum Laude
            from North Carolina State University in May 2020, obtaining my
            Bachelor of Science in Animal Science. After working in the
            veterinary field following graduation, I was ready for a career
            change and began teaching myself Swift in Summer of 2020. Shortly
            after, I discovered a passion for logic and enrolled in UNC's Coding
            Boot Camp, from which I will graduate in November 2021. I have a
            particular enthusiasm for writing frontend and backend logic.
          </p>
        </div>
      </div>
      <div class="row justify-content-between">
        <div class="col-md-4">
          <Skills category={frontendSkills.category} skills={frontendSkills.skills} />
        </div>
        <div class="col-md-4">
          <Skills category={backendSkills.category} skills={backendSkills.skills} />
        </div>
        <div class="col-md-4">
          <Skills category={otherSkills.category} skills={otherSkills.skills} />
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
