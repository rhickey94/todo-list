import * as Styles from "../styles/style.js";
import todoListMenu from "./todoList/todoListMenu.js";
import todoContainer from "./todoList/todoContainer.js";

function todoList() {
  const todoListEl = componentSetup();

  addListeners(todoListEl);

  return todoListEl;
}

function componentSetup() {
  Styles.applyStyle(getStyleString());
  const todoListEl = document.createElement("section");
  todoListEl.setAttribute("id", "todoList");

  todoListEl.appendChild(todoListMenu());
  todoListEl.appendChild(todoContainer());

  return todoListEl;
}

function addListeners(todoListEl) {}

function getStyleString() {
  return `
    #todoList {
      background-color: #BAD1CD;
      flex-grow: 1;

      display: flex;
      flex-direction: column;
    }
  `;
}

export default todoList;
