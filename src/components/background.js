import * as Styles from "../styles/style.js";

function background() {
  const mainEl = document.createElement("main");
  mainEl.setAttribute("id", "main")

  Styles.applyStyle(getStyleString());
  return mainEl;
}

function getStyleString() {
  return `
    #main {
      background-color: #BAD1CD;
      flex-grow: 1;

      display: flex;
    }
  `;
}

export default background;
