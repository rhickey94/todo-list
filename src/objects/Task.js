function Task(todoInfo) {
  let _title = todoInfo.title;
  let _description = todoInfo.description || "default desc";
  let _dueDate = todoInfo.dueDate || "default date";
  let _priority = todoInfo.priority || "low-d";

  function getTitle() {
    return _title;
  }

  function setTitle(todoInfo) {
    _title = todoInfo.name;
  }

  function getDate() {
    return _dueDate;
  }

  function setDate(todoInfo) {
    _dueDate = todoInfo.dueDate;
  }

  return {
    getTitle,
    setTitle,
    getDate,
    setDate,
  };
}

export default Task;