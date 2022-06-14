import React from 'react';
import ProjectTile from './ProjectTile';
import ImageList from '@mui/material/ImageList';

import { Project } from '../utils/models';

import artinAroundImg from '../images/projects/artin-around.png';
import appliTrakImg from '../images/projects/applitrak-dashboard.png';
import pokevImg from '../images/projects/pokev-tracker.png';
import skyGazerImg from '../images/projects/sky-gazer.png';
import employeeTrackerImg from '../images/projects/employee-tracker.gif';
import weatherDashboardImg from '../images/projects/weather-dashboard.png';
import cabotWrennImg from '../images/projects/cabot-wrenn.png';
import codeQuizImg from '../images/projects/code-quiz.png';

const projectsArray = [];

projectsArray.push(
  new Project(
    'https://artin-around.herokuapp.com/',
    'Collaborative project utilizing the MERN stack. Allows the user to explore street art by location and add their own images to their public portfolio.',
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
      'JWT',
      'Local Storage',
      'Node.js',
      'Material UI',
      'MERN Stack',
      'MongoDB',
      'Mongoose',
      'ReactJS',
    ],
    '',
    4,
    "Artin' Around"
  )
);

projectsArray.push(
  new Project(
    'https://immense-eyrie-11789.herokuapp.com/',
    'Full-stack application that allows the user to keep track of all the jobs they are applying for in one convenient location.',
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
    'myRole',
    4,
    'AppliTrak'
  )
);

projectsArray.push(
  new Project(
    'https://pokev-tracker.herokuapp.com/',
    "MERN stack application that allows the user to easily track their Pokémons' Effort Values while training.",
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
      'JWT',
      'Local Storage',
      'Node.js',
      'MERN Stack',
      'MongoDB',
      'Mongoose',
      'ReactJS',
    ],
    '',
    1,
    'PokÉV Tracker'
  )
);

projectsArray.push(
  new Project(
    'https://pamtheham.github.io/Sky-Gazer/',
    "Dashboard that uses the user's location and chosen satellite to determine the dates/times of that satellite's passovers for the next 7 days and their predicted visiblity.",
    'https://github.com/laurenlgoss/Sky-Gazer',
    skyGazerImg,
    ['API', 'Bulma', 'CSS', 'Frontend', 'HTML', 'JavaScript', 'Local Storage'],
    'myRole',
    4,
    'Sky Gazer'
  )
);

projectsArray.push(
  new Project(
    '',
    'Backend JavaScript application that allows the user to interact with an employee database through the command line.',
    'https://github.com/laurenlgoss/employee-tracker',
    employeeTrackerImg,
    ['Backend', 'Inquirer.js', 'JavaScript', 'MySQL', 'Node.js'],
    '',
    1,
    'Employee Tracker'
  )
);

projectsArray.push(
  new Project(
    'https://laurenlgoss.github.io/weather-dashboard/',
    'Weather dashboard that displays the current weather and 5-day forecast for whichever city the user inputs.',
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
    '',
    1,
    'Weather Dashboard'
  )
);

projectsArray.push(
  new Project(
    'https://cabotwrenn.com/',
    'Cabot Wrenn consumer-facing website. I was responsible for redesigning the homepage and created the Build Your Table section from scratch (from database design, to back-end, to front-end).',
    '',
    cabotWrennImg,
    [
      'ASP.NET',
      'Bootstrap',
      'CSS',
      'Fullstack',
      'HTML',
      'JavaScript',
      'jQuery',
      'MVC',
      'SQL',
      'Visual Basic',
    ],
    '',
    1,
    'Cabot Wrenn'
  )
);

projectsArray.push(
  new Project(
    'https://laurenlgoss.github.io/code-quiz/',
    'Multiple choice quiz that tests the user on knowledge of HTML, CSS, and JavaScript concepts.',
    'https://github.com/laurenlgoss/code-quiz',
    codeQuizImg,
    ['CSS', 'Frontend', 'HTML', 'JavaScript', 'Local Storage'],
    '',
    1,
    'Code Quiz'
  )
);

function ProjectsContainer() {
  return (
    <div id="projects" className="between-padding">
      <div className="section-title-wrapper">
        <div className="section-title">projects</div>
        <div className="alt-font text-center section-description">{`< A mixture of solo and collaborative projects I have completed. >`}</div>
      </div>

      <ImageList variant={'masonry'} cols={3} gap={20}>
        {projectsArray.map((project) => {
          return (
            <ProjectTile
              columnSide={project.columnSide}
              deployedApp={project.deployedApp}
              description={project.description}
              githubRepo={project.githubRepo}
              imgSrc={project.imgSrc}
              languages={project.languages}
              lightIcons={project.lightIcons}
              myRole={project.myRole}
              numOfGroupMembers={project.numOfGroupMembers}
              title={project.title}
            />
          );
        })}
      </ImageList>
    </div>
  );
}

export default ProjectsContainer;
