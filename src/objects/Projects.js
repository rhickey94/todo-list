function Projects(projects) {
  const _projects = projects;
  let currentProject = null;

  function getProjects() {
    return _projects;
  }

  function setProjects(projects) {
    _projects = projects;
  }

  function addProject(project) {
    _projects.push(project);
  }
  
  function getCurrentProject() {
    return currentProject;
  }
  
  function setCurrentProject(project) {
    currentProject = project;
  }

  return {
    getProjects,
    setProjects,
    addProject,
    getCurrentProject,
    setCurrentProject,
  }
}

export default Projects;
