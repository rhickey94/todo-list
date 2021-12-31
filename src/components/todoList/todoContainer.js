import * as Styles from "../../styles/style.js";
import todo from "./todo.js";

function todoContainer() {
  const todoContainer = componentSetup();

  return todoContainer;
}

function componentSetup() {
  const todoContainer = document.createElement("ul");
  todoContainer.setAttribute("id", "todoContainer");

  todoContainer.appendChild(todo("hi", "hi", "hi", "hi"));
  todoContainer.appendChild(todo("hi", "hi", "hi", "hi"));
  todoContainer.appendChild(todo("hi", "hi", "hi", "hi"));
  todoContainer.appendChild(todo("hi", "hi", "hi", "hi"));
  todoContainer.appendChild(todo("hi", "hi", "hi", "hi"));

  Styles.applyStyle(getStyleString());
  return todoContainer;
}

function getStyleString() {
  return `
    #todoContainer {
      background-color: #BAD1CD;
      list-style: none;

      margin-left: 10%;

    }
  `;
}

export default todoContainer;