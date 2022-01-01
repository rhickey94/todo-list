import * as Styles from "../../../styles/style";

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
    border-radius: 5px;
    border: none;

    font-size: 18px;
  }
  `;
}

export default todoListButton;
