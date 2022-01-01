import * as Styles from "../styles/style";

function footer() {
  const footer = componentSetup();

  return footer;
}

function componentSetup() {
  const footer = document.createElement("footer");
  footer.setAttribute("id", "footer");

  const div = document.createElement("div");
  div.textContent = "Copyright © The Odin Project 2021";

  footer.appendChild(div);

  Styles.applyStyle(getStyleString());
  return footer;
}

function getStyleString() {
  return `
    #footer { 
      color: #F1E3F3;
      background-color: #211A1D;

      font-size: 14px;
      font-weight: 300;
      height: 5%;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  `;
}

export default footer;
