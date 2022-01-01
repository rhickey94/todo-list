import * as Styles from "../../../styles/style.js";

function todoInput() {
  const todoInput = componentSetup();

  addListeners(todoInput)

  return todoInput;
}

function addListeners(input) {
  const newTodoEntered = new CustomEvent("enterTodo", {
    bubbles: true,
    detail: { text: () => input.value },
  });

  input.addEventListener("keyup", e => {
    if (e.key === 'Enter') {
      e.target.dispatchEvent(newTodoEntered)
    }
  })
}

function componentSetup() {
  Styles.applyStyle(getStyleString());
  const todoInput = document.createElement("input");
  todoInput.setAttribute("type", "text");
  todoInput.setAttribute("id", "todoInput");
  todoInput.setAttribute("placeholder", "Add new task");

  return todoInput;
}

function getStyleString() {
  return `
    #todoInput {
      border: none;
      border-radius: 5px;
      background-color: #F1E3F3;

      height: 36px;
      padding: 30px 20px;

      font-size: 24px;
    }

    #todoInput:focus {
      outline: none;
    }
  `;
}

export default todoInput;
