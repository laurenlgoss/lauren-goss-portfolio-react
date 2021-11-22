import React from 'react';
import Skills from './Skills';
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

const visualBasic = {
  img: '',
  name: 'Visual Basic'
}

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
            Boot Camp, from which I recently graduated. I have a particular
            enthusiasm for writing frontend and backend logic.
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
      <SkillsCarousel skills={carouselSkillsArray} />
    </div>
  );
}

export default AboutMe;
