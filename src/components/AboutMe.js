import React from 'react';
import SkillsCarousel from './SkillsCarousel';

import javaScriptImg from '../images/skills-logos/javascript.png';
import htmlImg from '../images/skills-logos/html-5.png';
import cssImg from '../images/skills-logos/css.png';
import jQueryImg from '../images/skills-logos/jquery.png';
import reactImg from '../images/skills-logos/react.png';
import nodeImg from '../images/skills-logos/node-js.png';
import bootstrapImg from '../images/skills-logos/bootstrap.png';
import expressImg from '../images/skills-logos/express.png';
import mySQLImg from '../images/skills-logos/mysql.png';
import sequelizeImg from '../images/skills-logos/sequelize.png';
import mongodbImg from '../images/skills-logos/mongodb.png';
import netImg from '../images/skills-logos/microsoft-dotnet.png';
import handlebarsImg from '../images/skills-logos/handlebars.png';
import graphqlImg from '../images/skills-logos/graphql.png';
import gitImg from '../images/skills-logos/git.png';
import visualStudioCodeImg from '../images/skills-logos/visual-studio-code.png';
import jestImg from '../images/skills-logos/jest.png';
import figmaImg from '../images/skills-logos/figma.png';
import bitbucketImg from '../images/skills-logos/bitbucket.png';
import sourcetreeImg from '../images/skills-logos/sourcetree.png';
import githubImg from '../images/skills-logos/github.png';
import robo3TImg from '../images/skills-logos/robo3t.png';
import insomniaImg from '../images/skills-logos/insomnia.png';
import materialUIImg from '../images/skills-logos/material-ui.png';
import microsoftVisualStudioImg from '../images/skills-logos/visual-studio.png';
import herokuImg from '../images/skills-logos/heroku.png';
import mongooseImg from '../images/skills-logos/mongoose.png';
import apolloImg from '../images/skills-logos/apollo.png';
import restfulAPIImg from '../images/skills-logos/restful-api.png';
import npmImg from '../images/skills-logos/npm.png';

// --- Skills Cards ---

const frontendSkills = {
  category: 'frontend',
  skills: [
    'JavaScript',
    'ReactJS',
    'Node.js',
    'Bootstrap/Material UI',
    'jQuery',
    'HTML/CSS',
  ],
};

const backendSkills = {
  category: 'backend',
  skills: [
    'Express.js',
    'MySQL/Sequelize',
    'NoSQL/MongoDB/Mongoose',
    '.NET/Visual Basic',
    'Handlebars.js',
    'GraphQL/Apollo Client',
  ],
};

const otherSkills = {
  category: 'other',
  skills: [
    'Git Source Control',
    'Visual Studio Code',
    'Unit Testing',
    'Model View Controller',
    'Wireframing/Figma',
    'Bitbucket/Sourcetree',
  ],
};

const skillsArray = [frontendSkills, backendSkills, otherSkills];

// --- Skills Carousel ---

const javaScript = {
  img: javaScriptImg,
  name: 'JavaScript',
};

const html = {
  img: htmlImg,
  name: 'HTML5',
};

const css = {
  img: cssImg,
  name: 'CSS3',
};

const jQuery = {
  img: jQueryImg,
  name: 'jQuery',
};

const react = {
  img: reactImg,
  name: 'ReactJS',
};

const node = {
  img: nodeImg,
  name: 'Node.js',
};

const bootstrap = {
  img: bootstrapImg,
  name: 'Bootstrap',
};

const materialUI = {
  img: materialUIImg,
  name: 'Material UI',
};

const express = {
  img: expressImg,
  name: 'Express.js',
};

const mySQL = {
  img: mySQLImg,
  name: 'MySQL',
};

const sequelize = {
  img: sequelizeImg,
  name: 'Sequelize',
};

const mongodb = {
  img: mongodbImg,
  name: 'MongoDB',
};

const net = {
  img: netImg,
  name: '.NET Framework',
};

// const visualBasic = {
//   img: '',
//   name: 'Visual Basic'
// }

const handlebars = {
  img: handlebarsImg,
  name: 'Handlebars.js',
};

const graphql = {
  img: graphqlImg,
  name: 'GraphQL',
};

const apollo = {
  img: apolloImg,
  name: 'Apollo',
};

const git = {
  img: gitImg,
  name: 'Git',
};

const visualStudioCode = {
  img: visualStudioCodeImg,
  name: 'Visual Studio Code',
};

const microsoftVisualStudio = {
  img: microsoftVisualStudioImg,
  name: 'Microsoft Visual Studio',
};

const jest = {
  img: jestImg,
  name: 'Jest',
};

const figma = {
  img: figmaImg,
  name: 'Figma',
};

const bitbucket = {
  img: bitbucketImg,
  name: 'Bitbucket',
};

const sourcetree = {
  img: sourcetreeImg,
  name: 'Sourcetree',
};

const robo3T = {
  img: robo3TImg,
  name: 'Robo 3T',
};

const insomnia = {
  img: insomniaImg,
  name: 'Insomnia',
};

const github = {
  img: githubImg,
  name: 'GitHub',
};

const heroku = {
  img: herokuImg,
  name: 'Heroku',
};

const mongoose = {
  img: mongooseImg,
  name: 'Mongoose',
};

const restfulAPI = {
  img: restfulAPIImg,
  name: 'RESTful API',
};

const npm = {
  img: npmImg,
  name: 'Node Package Manager',
};

// const macOS = {
//   img: '',
//   name: 'Mac OS',
// };

// const windowsOS = {
//   img: '',
//   name: 'Windows OS',
// };

// const microsoftSQLManagementServerStudio = {
//   img: '',
//   name: 'Microsoft SQL Server Management Studio',
// };

const carouselSkillsArray = [
  apollo,
  bitbucket,
  bootstrap,
  css,
  express,
  figma,
  git,
  github,
  graphql,
  handlebars,
  heroku,
  html,
  insomnia,
  javaScript,
  jest,
  jQuery,
  materialUI,
  microsoftVisualStudio,
  mongodb,
  mongoose,
  mySQL,
  net,
  node,
  npm,
  react,
  restfulAPI,
  robo3T,
  sequelize,
  sourcetree,
  // visualBasic,
  visualStudioCode,
];

function AboutMe() {
  return (
    <>
      <div id="about-me" className="between-padding">
        {/* Background */}
        <div className="row text-center about-me-row">
          <div className="col-lg-4 border-right about-me-section-col">
            <i class="bi bi-hourglass" style={{ fontSize: 75 }}></i>
            <h3 className="about-me-section-title">BACKGROUND</h3>
            <div className="about-me-section-text">
              I have a strong background in veterinary medicine. This allows me
              to bring a <strong>unique perspective</strong> and skillset to the
              world of web development. In my years of working in the veterinary
              field, I have honed my <strong>collaboration</strong> and{' '}
              <strong>teamwork</strong> skills. I pride myself on my ability to
              excel in team settings. During the Summer of 2020 I began teaching
              myself <strong>Swift</strong> and decided I wanted a career
              change. I soon after enrolled in a Coding Bootcamp and began
              pursuing my passion for <strong>logic</strong>.
            </div>
          </div>

          {/* Education */}
          <div className="col-lg-4 border-right about-me-section-col">
            <i class="bi bi-mortarboard" style={{ fontSize: 75 }}></i>
            <h3 className="about-me-section-title">EDUCATION</h3>
            <div className="about-me-section-text">
              I graduated <strong>Summa Cum Laude</strong> {'(3.89 GPA)'} with a{' '}
              <strong>Bachelor of Science</strong> in Animal Science{' '}
              {'(Veterinary Bioscience Concentration)'} and a Zoology Minor from
              North Carolina State University. Most recently I received a{' '}
              <a
                className="certificate"
                target={'_blank'}
                href="https://www.credly.com/badges/b0c414e7-ba48-40dc-b1ae-7b51729bd7eb"
              >
                certificate
              </a>{' '}
              in <strong>Full-Stack Web Development</strong> from the UNC Coding
              Bootcamp for Full-Stack Web Development. I am currently continuing
              my education through online{' '}
              <strong>web development courses</strong> offered by the University
              of North Carolina at Chapel Hill.
            </div>
          </div>

          {/* Experience */}
          <div className="col-lg-4 about-me-section-col">
            <i class="bi bi-clock-history" style={{ fontSize: 75 }}></i>
            <h3 className="about-me-section-title">EXPERIENCE</h3>
            <div className="about-me-section-text">
              I began learning web development over a year ago. Since then, I
              have held a position as a <strong>Web Development Intern</strong>{' '}
              at Century Furniture where I was instrumental in building a new{' '}
              <strong>.NET</strong> website from the ground up. Currently, I
              hold a <strong>Data Developer</strong> position at Century
              Furniture. I have gained experience in{' '}
              <strong>
                Visual Basic, database structuring {'(SQL)'}, Electronic Data
                Interchange {'(EDI)'}, SAP
              </strong>{' '}
              and more. I also continue to further my knowledge by working on
              personal projects.
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="between-padding alt-background">
        <div className="section-title-wrapper">
          <div className="section-title">skills & technologies</div>
          <div className="alt-font text-center section-description">{`< Languages, concepts, and software I am proficient in. >`}</div>
        </div>
        <SkillsCarousel skills={carouselSkillsArray} />
      </div>
    </>
  );
}

export default AboutMe;
