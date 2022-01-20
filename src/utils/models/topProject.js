class TopProject {
  constructor(
    deployedApp = '',
    description = '',
    githubRepo = '',
    imgSrc,
    languages = [],
    lightIcons = false,
    title = ''
  ) {
    this.deployedApp = deployedApp;
    this.description = description;
    this.githubRepo = githubRepo;
    this.imgSrc = imgSrc;
    this.languages = languages;
    this.lightIcons = lightIcons;
    this.title = title;
  }
}

export default TopProject;
