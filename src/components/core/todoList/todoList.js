import * as Styles from "../../../styles/style";
import todo from "./todo";

const todo1 = {
  title: "Title",
  description: "description",
  dueDate: "1/1/2022",
  priority: "high",
}

function todoList() {
  const todoList = componentSetup();

  return todoList;
}

function componentSetup() {
  const todoList = document.createElement("ul");
  todoList.setAttribute("id", "todoList");

  Styles.applyStyle(getStyleString());
  return todoList;
}

function getStyleString() {
  return `
    #todoList {
      background-color: #BAD1CD;

      margin-left: 10%;

      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  `;
}

export default todoList;