import * as Styles from "../../../styles/style";
import todoCard from "./todoCard";

function todo(todoInfo) {
  const todoEl = componentSetup(todoInfo);

  addListeners(todoEl);

  return todoEl;
}

function componentSetup(todoInfo) {
  const todoEl = document.createElement("li");
  todoEl.setAttribute("class", "todo");

  const todoCardEl = todoCard(todoInfo);

  todoEl.appendChild(todoCardEl);

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

      border: 10px solid #F1E3F3;
      border-radius: 10px;

      width: 70%;
    }

    .todoContainer {
      display: flex;
    }

    .hidden {
      display: none;
    }
  `;
}

function showTodoDetails(e) {
  const todoDetails = e.currentTarget.querySelector("div").querySelectorAll(".togglable");
  todoDetails.forEach((todoDetail) => todoDetail.classList.toggle("hidden"));
}

export default todo;
