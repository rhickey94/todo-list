import * as Styles from "../../../styles/style";
import todo from "./todo";

const todo1 = {
  title: "hi title",
  description: "hi description",
  dueDate: "hi due date",
  priority: "hi priority",
}

function todoList() {
  const todoList = componentSetup();

  return todoList;
}

function componentSetup() {
  const todoList = document.createElement("ul");
  todoList.setAttribute("id", "todoList");

  todoList.appendChild(todo(todo1));
  todoList.appendChild(todo(todo1));
  todoList.appendChild(todo(todo1));
  todoList.appendChild(todo(todo1));

  Styles.applyStyle(getStyleString());
  return todoList;
}

function getStyleString() {
  return `
    #todoList {
      background-color: #BAD1CD;
      list-style: none;

      margin-left: 10%;

      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  `;
}

export default todoList;