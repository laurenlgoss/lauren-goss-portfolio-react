export default function getBadgeColor(language) {
  let badgeColor = '';
  switch (language) {
    case 'JavaScript':
      badgeColor = 'javascript';
      break;
    case 'ReactJS':
      badgeColor = 'react';
      break;
    case 'Node.js':
      badgeColor = 'node';
      break;
    case 'Express.js':
      badgeColor = 'express';
      break;
    case 'GraphQL':
      badgeColor = 'graphql';
      break;
    case 'Apollo':
      badgeColor = 'apollo';
      break;
    case 'MongoDB':
      badgeColor = 'mongodb';
      break;
    case 'Mongoose':
      badgeColor = 'mongoose';
      break;
    case 'Material UI':
      badgeColor = 'material-ui';
      break;
    case 'HTML':
      badgeColor = 'html';
      break;
    case 'CSS':
      badgeColor = 'css';
      break;
    case 'MERN Stack':
      badgeColor = 'mern-stack';
      break;
    case 'Fullstack':
      badgeColor = 'fullstack';
      break;
    case 'Bootstrap':
      badgeColor = 'bootstrap';
      break;
    case 'Bulma':
      badgeColor = 'bulma';
      break;
    case 'API':
      badgeColor = 'api';
      break;
    case 'Handlebars.js':
      badgeColor = 'handlebars';
      break;
    case 'MySQL':
      badgeColor = 'mysql';
      break;
    case 'Sequelize':
      badgeColor = 'sequelize';
      break;
    case 'Local Storage':
      badgeColor = 'local-storage';
      break;
    case 'Frontend':
      badgeColor = 'frontend';
      break;
    case 'Backend':
      badgeColor = 'backend';
      break;
    case 'SQL':
      badgeColor = 'sql';
      break;
    case 'ASP.NET':
      badgeColor = 'asp-net';
      break;
    case 'jQuery':
      badgeColor = 'jquery';
      break;
    case 'Visual Basic':
      badgeColor = 'visual-basic';
      break;
    default:
      badgeColor = 'default-pill';
  }

  return badgeColor;
}
