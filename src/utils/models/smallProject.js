import TopProject from './topProject';

class SmallProject extends TopProject {
  constructor(
    columnSide = '',
    deployedApp = '',
    description = '',
    githubRepo = '',
    imgSrc,
    languages = [],
    lightIcons = false,
    myRole = '',
    numOfGroupMembers = 1,
    title = ''
  ) {
    super(
      deployedApp,
      description,
      githubRepo,
      imgSrc,
      languages,
      lightIcons,
      myRole,
      numOfGroupMembers,
      title
    );
    this.columnSide = columnSide;
  }
}

export default SmallProject;
