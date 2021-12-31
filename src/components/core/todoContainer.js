import * as Styles from "../../styles/style";
import todoListMenu from "./todoList/todoListMenu";
import todoList from "./todoList/todoList"

function todoContainer() {
  const todoListEl = componentSetup();

  addListeners(todoListEl);

  return todoListEl;
}

function componentSetup() {
  Styles.applyStyle(getStyleString());
  const todoListEl = document.createElement("section");
  todoListEl.setAttribute("id", "todoContainer");

  todoListEl.appendChild(todoListMenu());
  todoListEl.appendChild(todoList());

  return todoListEl;
}

function addListeners(todoListEl) {}

function getStyleString() {
  return `
    #todoContainer {
      background-color: #BAD1CD;
      flex-grow: 1;

      display: flex;
      flex-direction: column;
    }
  `;
}

export default todoContainer;
