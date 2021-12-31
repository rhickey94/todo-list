import * as Styles from "../../styles/style.js";

function todoListButton(text) {
  const button = componentSetup(text);

  addListeners(button);

  return button;
}

function componentSetup(text) {
  const button = document.createElement("button");
  button.setAttribute("class", "todoListButton");

  button.innerHTML = text;

  Styles.applyStyle(getStyleString());
  return button;
}

function addListeners(button) {

}

function getStyleString() {
  return `
  .todoListButton {
    word-wrap: break-word;
    background-color: #177E89;
    color: #F1E3F3;

    width: 15%;
    height: 40%;

    border-radius: 5px;
    border: none;

    padding: 5px;
    margin-left: 10%;

    font-size: 18px;
  }
  `;
}

export default todoListButton;
