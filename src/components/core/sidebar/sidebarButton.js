import * as Styles from "../../../styles/style";

function sidebarButton(text) {
  const button = componentSetup(text);
  
  addListeners(button);
  
  return button;
}

function componentSetup(text) {
  const button = document.createElement("button");
  button.setAttribute("class", "sidebarButton project");
  
  button.innerHTML = text;

  if (button.innerHTML.includes("Add")) {
    button.setAttribute("class", "sidebarButton addNewButton")
  }

  Styles.applyStyle(getStyleString());
  return button;
}

function addListeners(button) {
  const projectSelected = new CustomEvent("selectProject", {
    bubbles:true
  })
  if (button.innerHTML.includes("Add")) {
    const addProjectClicked = new CustomEvent("addProject", {
      bubbles: true,
      detail: { text: () => button.innerHTML },
    });
    button.addEventListener("click", (e) => e.target.dispatchEvent(addProjectClicked));
  }
  button.addEventListener("click", e => e.target.dispatchEvent(projectSelected));
}

function getStyleString() {
  return `
    .sidebarButton {
      word-wrap: break-word;
      color: #177E89;
      background-color: #F1E3F3;

      width: 60%;

      border-radius: 5px;
      border: none;
      padding: 5px;

      font-size: 18px;
    }

    .sidebarButton:hover {
      background-color: #177E89;
      color: #F1E3F3;
    }

    .sidebarButton_selected {
      background-color: #177E89;
      color: #F1E3F3;
    }
  `;
}

export default sidebarButton;
