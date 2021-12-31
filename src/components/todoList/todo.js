function todo(title, description, dueDate, priority) {
  const todoEl = document.createElement('li');
  const div = document.createElement('div');
  
  const todoTitle = document.createElement('p'); 
  todoTitle.textContent = title;

  const todoDescription = document.createElement('p'); 
  todoDescription.textContent = description;

  const todoDueDate = document.createElement('p'); 
  todoDueDate.textContent = dueDate;

  const todoPriority = document.createElement('p'); 
  todoPriority.textContent = priority;

  div.appendChild(todoTitle)
  div.appendChild(todoDescription)
  div.appendChild(todoDueDate)
  div.appendChild(todoPriority)

  todoEl.appendChild(div)

  return todoEl
}

export default todo;
