import * as Styles from "../styles/style.js";

function todoList() {
  const todoListEl = document.createElement("section");
  todoListEl.setAttribute("id", "todoList");

  Styles.applyStyle(getStyleString());
  return todoListEl;
}

function getStyleString() {
  return `
    #todoList {
      background-color: #BAD1CD;
      width: 100%;
    }
  `;
}

export default todoList;
