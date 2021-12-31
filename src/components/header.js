import * as Styles from "../styles/style.js";

function header() {
  const header = document.createElement("header");
  header.setAttribute("id", "header");

  const div = document.createElement("div");
  div.setAttribute("id", "logo");
  div.textContent = "To Do!";

  header.appendChild(div);

  Styles.applyStyle(getStyleString());
  return header;
}

function getStyleString() {
  return `
    #header { 
      color: #F1E3F3;
      background-color: #211A1D;

      font-size: 36px;
      font-weight: 700;
      height: 10%;

      display: flex;
      align-items: center;
      justify-content: flex-start;

      padding-left: 10%;
    }
  `;
}

export default header;
