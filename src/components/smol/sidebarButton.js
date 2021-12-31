import * as Styles from "../../styles/style.js";

function sidebarButton(text) {
  const button = document.createElement("button");
  button.setAttribute("class", "sidebarButton");

  button.innerHTML = text;

  Styles.applyStyle(getStyleString());
  return button;
}

function getStyleString() {
  return `
    .sidebarButton {
      word-wrap: break-word;
      color: #177E89;
      background-color: #F1E3F3;

      width: 60%;

      border-radius: 5px;
      border: 0;
      padding: 5px;

      font-size: 18px;
    }

    .sidebarButton:hover {
      background-color: #177E89;
      color: #F1E3F3;
    }
  `;
}

export default sidebarButton;
