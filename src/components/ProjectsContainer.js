import React from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';

import artinAroundImg from '../images/projects/artin-around.png';
import appliTrakImg from '../images/projects/applitrak-dashboard.png';
import skyGazerImg from '../images/projects/sky-gazer.png';
import employeeTrackerImg from '../images/projects/employee-tracker.gif';
import weatherDashboardImg from '../images/projects/weather-dashboard.png';
// import codeQuizImg from '../images/projects/code-quiz.png';

const featuredProject = {
  deployedApp: 'https://artin-around.herokuapp.com/',
  description:
    '// collaborative project utilizing the MERN stack. allows the user to explore street art by location and add their own images to their public portfolio.',
  githubRepo: 'https://github.com/laurenlgoss/Public-Art-Finder',
  imgSrc: artinAroundImg,
  languages: [
    'Apollo',
    'Cloudinary',
    'CSS',
    'Express.js',
    'GraphQL',
    'HTML',
    'JavaScript',
    'Node.js',
    'Material UI',
    'MERN Stack',
    'MongoDB',
    'Mongoose',
    'ReactJS',
  ],
  lightIcons: false,
  title: "Artin' Around",
};

const projectsArray = [];

projectsArray.push({
  // borderColor: 'bluePink',
  columnSide: 'right',
  deployedApp: 'https://immense-eyrie-11789.herokuapp.com/',
  description:
    '// full-stack application that allows the user to keep track of all the jobs they are applying for in one convenient location.',
  githubRepo: 'https://github.com/laurenlgoss/job-application-tracker',
  imgSrc: appliTrakImg,
  languages: [
    'Bootstrap',
    'CSS',
    'Express.js',
    'Full Calendar.io',
    'Fullstack',
    'Handlebars.js',
    'HTML',
    'JavaScript',
    'MySQL',
    'Node.js',
    'Sequelize',
  ],
  lightIcons: false,
  title: 'AppliTrak',
});

projectsArray.push({
  // borderColor: 'yellowGreen',
  columnSide: 'left',
  deployedApp: 'https://pamtheham.github.io/Sky-Gazer/',
  description:
    "// dashboard that uses the user's location and chosen satellite to determine the dates/times of that satellite's passovers for the next 7 days and their predicted visiblity.",
  githubRepo: 'https://github.com/laurenlgoss/Sky-Gazer',
  imgSrc: skyGazerImg,
  languages: ['API', 'Bulma', 'CSS', 'Frontend', 'HTML', 'JavaScript', 'Local Storage'],
  lightIcons: false,
  title: 'Sky Gazer',
});

projectsArray.push({
  // borderColor: 'bluePink',
  columnSide: 'left',
  deployedApp: '',
  description:
    '// backend JavaScript application that allows the user to interact with an employee database through the command line.',
  githubRepo: 'https://github.com/laurenlgoss/employee-tracker',
  imgSrc: employeeTrackerImg,
  languages: ['Backend', 'Inquirer.js', 'JavaScript', 'MySQL', 'Node.js'],
  lightIcons: true,
  title: 'Employee Tracker',
});

projectsArray.push({
  // borderColor: 'yellowGreen',
  columnSide: 'right',
  deployedApp: 'https://laurenlgoss.github.io/weather-dashboard/',
  description:
    '// weather dashboard that displays the current weather and 5-day forecast for whichever city the user inputs.',
  githubRepo: 'https://github.com/laurenlgoss/weather-dashboard',
  imgSrc: weatherDashboardImg,
  languages: ['API', 'Bootstrap', 'CSS', 'Frontend', 'HTML', 'JavaScript', 'Local Storage'],
  lightIcons: false,
  title: 'Weather Dashboard',
});

// const codeQuiz = {
//   borderColor: 'bluePink',
//   columnSide: 'left',
//   deployedApp: 'https://laurenlgoss.github.io/code-quiz/',
//   description:
//     '// multiple choice quiz that tests the user on knowledge of HTML, CSS, and JavaScript concepts.',
//   githubRepo: 'https://github.com/laurenlgoss/code-quiz',
//   imgSrc: codeQuizImg,
//   languages: ['CSS', 'HTML', 'JavaScript', 'Local Storage'],
//   lightIcons: false,
//   title: 'Code Quiz',
// };

function ProjectsContainer() {
  return (
    <div id="projects">
      <div className="row justify-content-between featured-project">
        <h1 className="section-title" id="projects-title">
          projects
        </h1>
        <FeaturedProject
          deployedApp={featuredProject.deployedApp}
          description={featuredProject.description}
          githubRepo={featuredProject.githubRepo}
          imgSrc={featuredProject.imgSrc}
          languages={featuredProject.languages}
          lightIcons={featuredProject.lightIcons}
          title={featuredProject.title}
        />
      </div>

      <div className="row justify-content-around projects">
        <div className="col-md-6">
          {projectsArray
            .filter((project) => {
              return project.columnSide === 'left';
            })
            .map((project) => {
              return (
                <Project
                  borderColor={project.borderColor}
                  columnSide={project.columnSide}
                  deployedApp={project.deployedApp}
                  description={project.description}
                  githubRepo={project.githubRepo}
                  imgSrc={project.imgSrc}
                  languages={project.languages}
                  lightIcons={project.lightIcons}
                  title={project.title}
                />
              );
            })}
        </div>
        <div className="col-md-6">
          {projectsArray
            .filter((project) => {
              return project.columnSide === 'right';
            })
            .map((project) => {
              return (
                <Project
                  borderColor={project.borderColor}
                  columnSide={project.columnSide}
                  deployedApp={project.deployedApp}
                  description={project.description}
                  githubRepo={project.githubRepo}
                  imgSrc={project.imgSrc}
                  languages={project.languages}
                  title={project.title}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ProjectsContainer;
