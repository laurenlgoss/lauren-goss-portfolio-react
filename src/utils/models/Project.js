class Project {
  constructor(
    deployedApp = '',
    description = '',
    githubRepo = '',
    imgSrc,
    languages = [],
    myRole = '',
    numOfGroupMembers = 1,
    title = ''
  ) {
    this.deployedApp = deployedApp;
    this.description = description;
    this.githubRepo = githubRepo;
    this.imgSrc = imgSrc;
    this.languages = languages;
    this.myRole = myRole;
    this.numOfGroupMembers = numOfGroupMembers;
    this.title = title;
  }
}

export default Project;
