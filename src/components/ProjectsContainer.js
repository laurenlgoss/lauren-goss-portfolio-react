import React from 'react';
import FeaturedProject from './FeaturedProject';
import Project from './Project';

const skyGazer = {
  borderColor: 'yellowGreen',
  columnSide: 'left',
  deployedApp: 'https://pamtheham.github.io/Sky-Gazer/',
  description:
    "// dashboard that uses the user's location and chosen satellite to determine the dates/times of that satellite's passovers for the next 7 days and their predicted visiblity.",
  githubRepo: 'https://github.com/laurenlgoss/Sky-Gazer',
  imgSrc: '',
  languages: ['JavaScript', 'API', 'Bulma', 'Local Storage'],
  title: 'Sky Gazer',
};

const employeeTracker = {
  borderColor: 'bluePink',
  columnSide: 'left',
  deployedApp: '',
  description:
    '// backend JavaScript application that allows the user to interact with an employee database through the command line.',
  githubRepo: 'https://github.com/laurenlgoss/employee-tracker',
  imgSrc: '',
  languages: ['JavaScript', 'Node.js', 'MySQL', 'Inquirer.js'],
  title: 'Employee Tracker',
};

const weatherDashboard = {
  borderColor: 'bluePink',
  columnSide: 'right',
  deployedApp: 'https://laurenlgoss.github.io/weather-dashboard/',
  description:
    '// weather dashboard that displays the current weather and 5-day forecast for whichever city user inputs.',
  githubRepo: 'https://github.com/laurenlgoss/weather-dashboard',
  imgSrc: '',
  languages: ['JavaScript', 'API', 'Bootstrap', 'Local Storage'],
  title: 'Weather Dashboard',
};

const codeQuiz = {
  borderColor: 'yellowGreen',
  columnSide: 'right',
  deployedApp: 'https://laurenlgoss.github.io/code-quiz/',
  description:
    '// multiple choice quiz that tests the user on knowledge of HTML, CSS, and JavaScript concepts.',
  githubRepo: 'https://github.com/laurenlgoss/code-quiz',
  imgSrc: '',
  languages: ['JavaScript', 'Local Storage', 'HTML/CSS'],
  title: 'Code Quiz',
};

const projectsArray = [skyGazer, employeeTracker, weatherDashboard, codeQuiz];

function ProjectsContainer() {
  return (
    <div id="projects">
      <div className="row justify-content-between featured-project">
        <h1 className="section-title" id="projects-title">
          projects
        </h1>
        {/* <FeaturedProject /> */}
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
