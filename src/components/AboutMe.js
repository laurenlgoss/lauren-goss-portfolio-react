import React from 'react';
import Skills from './Skills';

const frontendSkills = {
  category: 'frontend',
  skills: [
    'JavaScript',
    'Node.js',
    'jQuery',
    'ReactJS',
    'HTML/CSS',
    'Apollo Client',
  ],
};

const backendSkills = {
  category: 'backend',
  skills: [
    'Express.js',
    'ASP.NET/Visual Basic',
    'MySQL/Sequelize',
    'NoSQL/MongoDB/Mongoose',
    'Handlebars.js',
    'GraphQL',
  ],
};

const otherSkills = {
  category: 'other',
  skills: [
    'Unit Testing',
    'Model View Controller',
    'Visual Studio Code',
    'Wireframing/Figma',
    'Bitbucket/Sourcetree',
    'Git Source Control',
  ],
};

const skillsArray = [frontendSkills, backendSkills, otherSkills];

function AboutMe() {
  return (
    <div id="about-me">
      <div className="row" style={{ position: 'relative' }}>
        <h1 className="section-title" id="about-me-title">
          about
        </h1>
        <div className="col-8 offset-2">
          <p>
            I am presently residing in Hickory, NC. I graduated Summa Cum Laude
            from North Carolina State University in May 2020, obtaining my
            Bachelor of Science in Animal Science. After working in the
            veterinary field following graduation, I was ready for a career
            change and began teaching myself Swift in Summer of 2020. Shortly
            after, I discovered a passion for logic and enrolled in UNC's Coding
            Boot Camp, from which I recently graduated. I have a
            particular enthusiasm for writing frontend and backend logic.
          </p>
        </div>
      </div>
      <div className="row justify-content-between">
        {skillsArray.map((skillsObject) => {
          return (
            <div className="col-md-4">
              <Skills
                category={skillsObject.category}
                skills={skillsObject.skills}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutMe;
