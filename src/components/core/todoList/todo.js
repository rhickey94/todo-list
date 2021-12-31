import * as Styles from "../../../styles/style";
import todoListButton from "./todoListButton";

function todo(todoInfo) {
  const todoEl = componentSetup(todoInfo);

  addListeners(todoEl);

  return todoEl;
}

function componentSetup(todoInfo) {
  const todoEl = document.createElement("li");
  todoEl.setAttribute("class", "todo");

  const todoElDiv = document.createElement("div");
  todoElDiv.setAttribute("class", "todoContainer");

  const todoTitle = document.createElement("p");
  todoTitle.textContent = todoInfo.title;
  todoElDiv.appendChild(todoTitle);

  createTodoDetails(todoElDiv, todoInfo);
  addButtons(todoElDiv);

  todoEl.appendChild(todoElDiv);

  Styles.applyStyle(getStyleString());
  return todoEl;
}

function addListeners(todoEl) {
  todoEl.addEventListener("click", (e) => showTodoDetails(e));
}

function getStyleString() {
  return `
    .todo {
      background-color: #F1E3F3;

      width: 70%;
      height: 44px;
    }

    .todoContainer {
      display: flex;
    }

    .todoContainerButton {
      margin: 0;
    }

    .hidden {
      display: none;
    }
  `;
}

function createTodoDetails(todoElDiv, todoDetails) {
  const todoDescription = document.createElement("p");
  const todoDueDate = document.createElement("p");
  const todoPriority = document.createElement("p");

  todoDescription.textContent = todoDetails.description;
  todoDueDate.textContent = todoDetails.dueDate;
  todoPriority.textContent = todoDetails.priority;

  todoDescription.classList.add("hidden", "togglable");
  todoDueDate.classList.add("hidden", "togglable");
  todoPriority.classList.add("hidden", "togglable");

  todoElDiv.appendChild(todoDescription);
  todoElDiv.appendChild(todoDueDate);
  todoElDiv.appendChild(todoPriority);
}

function addButtons(todoElDiv) {
  const buttons = {
    editButton: todoListButton("Edit"),
    deleteButton: todoListButton("Delete"),
  };

  for (let button in buttons) {
    buttons[button].classList.add("todoContainerButton");
    todoElDiv.appendChild(buttons[button]);
  }
}

function showTodoDetails(e) {
  const todoDetails = e.currentTarget.querySelector("div").querySelectorAll(".togglable");
  todoDetails.forEach((todoDetail) => todoDetail.classList.toggle("hidden"));
}

export default todo;
