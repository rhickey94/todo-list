import * as Styles from "../../../styles/style";


function sidebarInput() {
  const input = componentSetup();
  
  addListeners(input);

  return input;
}

function componentSetup() {
  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("class", "sidebarInput");
  input.setAttribute("placeholder", "Add new project");
  input.setAttribute("autofocus", "autofocus");

  Styles.applyStyle(getStyleString());
  return input;
}

function addListeners(input) {
  const addProjectEntered = new CustomEvent("enterProject", {
   bubbles:true,
   detail: { text: () => input.value },
  })
  const newProjectCanceled = new CustomEvent("cancelProject", {
    bubbles:true
  })

  input.addEventListener("keyup", e => {
    if (e.key === 'Enter') {
      e.target.dispatchEvent(addProjectEntered)
    }

    if (e.key === 'Escape') {
      e.target.dispatchEvent(newProjectCanceled)
    }
  })
}

function getStyleString() {
  return `
    .sidebarInput {
      border: none;
      background-color: #F1E3F3;

      font-size: 18px;
      height: 18px;
      width: 60%;
    
      padding: 15px;
      padding-left: 30px;
    }

    .sidebarInput:focus {
      outline: none;
    }
  `;
}

export default sidebarInput;
