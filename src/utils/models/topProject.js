class TopProject {
  constructor(
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
    this.deployedApp = deployedApp;
    this.description = description;
    this.githubRepo = githubRepo;
    this.imgSrc = imgSrc;
    this.languages = languages;
    this.lightIcons = lightIcons;
    this.myRole = myRole;
    this.numOfGroupMembers = numOfGroupMembers;
    this.title = title;
  }
}

export default TopProject;
