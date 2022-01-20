import React from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';

import { TopProject, SmallProject } from '../utils/models';

import artinAroundImg from '../images/projects/artin-around.png';
import appliTrakImg from '../images/projects/applitrak-dashboard.png';
import pokevImg from '../images/projects/pokev-tracker.png';
import skyGazerImg from '../images/projects/sky-gazer.png';
// import employeeTrackerImg from '../images/projects/employee-tracker.gif';
import weatherDashboardImg from '../images/projects/weather-dashboard.png';
// import codeQuizImg from '../images/projects/code-quiz.png';

const featuredProject = new TopProject(
  'https://artin-around.herokuapp.com/',
  '// collaborative project utilizing the MERN stack. allows the user to explore street art by location and add their own images to their public portfolio.',
  'https://github.com/laurenlgoss/Public-Art-Finder',
  artinAroundImg,
  [
    'Apollo',
    'Cloudinary',
    'CSS',
    'Express.js',
    'GraphQL',
    'HTML',
    'JavaScript',
    'Local Storage',
    'Node.js',
    'Material UI',
    'MERN Stack',
    'MongoDB',
    'Mongoose',
    'ReactJS',
  ],
  false,
  "Artin' Around"
);

const projectsArray = [];

projectsArray.push(
  new SmallProject(
    'right',
    'https://immense-eyrie-11789.herokuapp.com/',
    '// full-stack application that allows the user to keep track of all the jobs they are applying for in one convenient location.',
    'https://github.com/laurenlgoss/job-application-tracker',
    appliTrakImg,
    [
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
    false,
    'AppliTrak'
  )
);

projectsArray.push(
  new SmallProject(
    'right',
    'https://pokev-tracker.herokuapp.com/',
    "// MERN stack application that allows the user to easily track their Pokémons' Effort Values while training.",
    'https://github.com/laurenlgoss/pokemon-tracker',
    pokevImg,
    [
      'API',
      'Apollo',
      'Bootstrap',
      'CSS',
      'Express.js',
      'GraphQL',
      'HTML',
      'JavaScript',
      'Local Storage',
      'Node.js',
      'MERN Stack',
      'MongoDB',
      'Mongoose',
      'ReactJS',
    ],
    false,
    'PokÉV Tracker'
  )
);

projectsArray.push(
  new SmallProject(
    'left',
    'https://pamtheham.github.io/Sky-Gazer/',
    "// dashboard that uses the user's location and chosen satellite to determine the dates/times of that satellite's passovers for the next 7 days and their predicted visiblity.",
    'https://github.com/laurenlgoss/Sky-Gazer',
    skyGazerImg,
    ['API', 'Bulma', 'CSS', 'Frontend', 'HTML', 'JavaScript', 'Local Storage'],
    false,
    'Sky Gazer'
  )
);

// projectsArray.push({
//   // borderColor: 'bluePink',
//   columnSide: 'left',
//   deployedApp: '',
//   description:
//     '// backend JavaScript application that allows the user to interact with an employee database through the command line.',
//   githubRepo: 'https://github.com/laurenlgoss/employee-tracker',
//   imgSrc: employeeTrackerImg,
//   languages: ['Backend', 'Inquirer.js', 'JavaScript', 'MySQL', 'Node.js'],
//   lightIcons: true,
//   title: 'Employee Tracker',
// });

projectsArray.push(
  new SmallProject(
    'left',
    'https://laurenlgoss.github.io/weather-dashboard/',
    '// weather dashboard that displays the current weather and 5-day forecast for whichever city the user inputs.',
    'https://github.com/laurenlgoss/weather-dashboard',
    weatherDashboardImg,
    [
      'API',
      'Bootstrap',
      'CSS',
      'Frontend',
      'HTML',
      'JavaScript',
      'Local Storage',
    ],
    false,
    'Weather Dashboard'
  )
);

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
