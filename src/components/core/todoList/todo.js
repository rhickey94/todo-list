import * as Styles from "../../../styles/style.js";
import todoListButton from "./todoListButton";

function todo(Task) {
  const todoCard = componentSetup(Task);

  addListeners(todoCard);

  return todoCard;
}

function componentSetup(Task) {
  const todoCard = document.createElement("li");
  todoCard.setAttribute("class", "todoCard");

  // To do card details
  const todoCardDetails = document.createElement("ul");
  todoCardDetails.setAttribute("class", "todoCardDetails");

  const todoTitle = document.createElement("li");
  todoTitle.textContent = Task.getTitle() || "";
  todoCardDetails.appendChild(todoTitle);

  createTodoDetails(todoCardDetails, Task);

  //To do card buttons
  const todoCardButtons = document.createElement("div");
  todoCardButtons.setAttribute("class", "todoCardButtons");
  addButtons(todoCardButtons);

  todoCard.appendChild(todoCardDetails);
  todoCard.appendChild(todoCardButtons);

  Styles.applyStyle(getStyleString());
  return todoCard;
}

function addListeners(todoEl) {
  const deleteButtonClicked = new CustomEvent("deleteTodo", {
    bubbles: true,
  });
  const completeButtonClicked = new CustomEvent("completeTodo", {
    bubbles: true,
  });

  todoEl.addEventListener("click", (e) => {
    if (e.target.textContent === "Delete") {
      e.target.dispatchEvent(deleteButtonClicked);
    }
  });

  todoEl.addEventListener("click", e => {
    if (e.target.textContent === "Complete") {
      e.target.dispatchEvent(completeButtonClicked);
    }
  })

  todoEl.addEventListener("click", (e) => showTodoDetails(e));
}

function getStyleString() {
  return `
    .todoCard {
      background-color: #F1E3F3;
      
      border: 10px solid #F1E3F3;
      border-radius: 10px;

      display: flex;
      justify-content: space-between;
    }

    .todoCardDetails {
      display: flex;
      align-items: center;
      gap: 10px;

      width: 100%;

      font-size: 24px;
      padding-left: 10px;
      flex-flow: row wrap;
    }

    .todoCardButtons {
      display: flex;
      gap: 5px;
      width: 20%;
    }

    .todoCardButtons .todoContainerButton {
      margin: 5px;
      padding: 10px;
      height: 43px;
    }
    
    .todoContainerButton:nth-child(1) {
      background-color: #9381FF;
    }

    .todoContainerButton:nth-child(2) {
      background-color: #DB3A34;
    }

    .hidden {
      display: none;
    }
  `;
}

function createTodoDetails(todoCardDetails, Task) {
  // const todoDescription = document.createElement("p");
  const todoDueDate = document.createElement("p");
  // const todoPriority = document.createElement("p");

  // todoDescription.textContent = todoDetails.description || "";
  todoDueDate.textContent = Task.getDate() || "";
  // todoPriority.textContent = todoDetails.priority || "";

  // todoDescription.classList.add("hidden", "togglable");
  todoDueDate.classList.add("hidden", "togglable");
  // todoPriority.classList.add("hidden", "togglable");

  // todoCardDetails.appendChild(todoDescription);
  todoCardDetails.appendChild(todoDueDate);
  // todoCardDetails.appendChild(todoPriority);
}

function addButtons(todoCardButtons) {
  const buttons = {
    completeButton: todoListButton("Complete"),
    deleteButton: todoListButton("Delete"),
  };

  for (let button in buttons) {
    buttons[button].classList.add("todoContainerButton");
    todoCardButtons.appendChild(buttons[button]);
  }
}

function showTodoDetails(e) {
  if (Array.from(e.target.classList).includes("todoCardDetails")) {
    const todoDetails = document.querySelectorAll(".togglable");
    todoDetails.forEach((todoDetail) => todoDetail.classList.toggle("hidden"));
  }
}

export default todo;
