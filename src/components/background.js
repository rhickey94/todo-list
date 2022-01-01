import * as Styles from "../styles/style";
import { projects } from "./core/sidebarContainer";

function background() {
  const mainEl = componentSetup();

  addListeners(mainEl)
  
  return mainEl;
}

function componentSetup() {
  const mainEl = document.createElement("main");
  mainEl.setAttribute("id", "main")

  Styles.applyStyle(getStyleString());
  return mainEl;
}

function addListeners(mainEl) {
  mainEl.addEventListener("selectProject", e => console.log(e.currentTarget))
  mainEl.addEventListener("selectProject", e => console.log(e.target.textContent))
  mainEl.addEventListener("selectProject", e => console.log(projects))
  mainEl.addEventListener("selectProject", e => selectProject(e))

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

function selectProject(e) {
  const mainEl = e.currentTarget;
  const todoContainer = document.querySelector("#todoContainer");
  // const 

  mainEl.removeChild(todoContainer);

  mainEl.appendChild(projects[e.target.textContent])
}

export default background;
