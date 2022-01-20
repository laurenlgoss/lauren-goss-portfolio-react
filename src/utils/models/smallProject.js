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
    title = ''
  ) {
    super(
      deployedApp,
      description,
      githubRepo,
      imgSrc,
      languages,
      lightIcons,
      title
    );
    this.columnSide = columnSide;
  }
}

export default SmallProject;
