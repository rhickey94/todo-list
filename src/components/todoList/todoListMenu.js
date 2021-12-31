import * as Styles from "../../styles/style.js";
import todoListButton from "./todoListButton";

function todoListMenu() {
  const todoListMenu = componentSetup();

  return todoListMenu;
}

function componentSetup() {
  const todoListMenu = document.createElement("section");
  todoListMenu.setAttribute("id", "todoListMenu");

  todoListMenu.appendChild(todoListButton("Create To Do"));

  Styles.applyStyle(getStyleString());
  return todoListMenu;
}

function getStyleString() {
  return `
    #todoListMenu {
      background-color: #BAD1CD;
      width: 100%;
      height: 10%;

      display: flex;
      align-items: flex-end;
      margin-bottom: 10%;
    }
  `;
}

export default todoListMenu;
