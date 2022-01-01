import * as Styles from "../../../styles/style";
import todoListButton from "./todoListButton";
import todo from "./todo";

function todoContainerMenu() {
  const todoContainerMenu = componentSetup();

  return todoContainerMenu;
}

function componentSetup() {
  const todoContainerMenu = document.createElement("section");
  todoContainerMenu.setAttribute("id", "todoContainerMenu");

  const createTodoButton = todoListButton("Create To Do");
  createTodoButton.setAttribute("class", "todoMenuButton")
  todoContainerMenu.appendChild(createTodoButton);

  Styles.applyStyle(getStyleString());
  return todoContainerMenu;
}

function addListeners() {

}

function getStyleString() {
  return `
    #todoContainerMenu {
      background-color: #BAD1CD;
      width: 100%;
      height: 20%;

      display: flex;
      flex-direction: column;
      justify-content: space-around;

      padding-left: 10%;
    }

    #todoContainerMenu .todoMenuButton {
        word-wrap: break-word;
        background-color: #177E89;
        color: #F1E3F3;
    
        width: 15%;
    
        border-radius: 5px;
        border: none;
    
        padding: 15px;

        font-size: 18px;
      }
    }
  `;
}

export default todoContainerMenu;
