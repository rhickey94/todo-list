function Project(name) {
  let _name = name;
  let _tasks = [];

  function getName() {
    return _name;
  }

  function setName(name) {
    _name = name;
  }

  function getTasks() {
    return _tasks;
  }

  function setTasks(tasks) {
    _tasks = tasks;
  }

  function addTask(task) {
    _tasks.push(task);
  }

  return {
    getName,
    setName,
    getTasks,
    setTasks,
    addTask,
  };
}

export default Project;
