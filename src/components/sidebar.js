import * as Styles from "../styles/style.js";
import sidebarButton from "./sidebar/sidebarButton.js";
import sidebarInput from "./sidebar/sidebarInput.js";

function sidebar() {
  const sidebarEl = componentSetup();

  addListeners(sidebarEl);

  return sidebarEl;
}

function componentSetup() {
  Styles.applyStyle(getStyleString());
  const sidebarEl = document.createElement("aside");
  sidebarEl.setAttribute("id", "sidebar");

  const sidebarHeading = document.createElement("h3");
  sidebarHeading.textContent = "Projects";

  sidebarEl.appendChild(sidebarHeading);
  sidebarEl.appendChild(sidebarButton("Project 1"));
  sidebarEl.appendChild(sidebarButton("Project 2"));
  sidebarEl.appendChild(sidebarButton("Project 3"));
  sidebarEl.appendChild(sidebarButton("Project 4"));
  sidebarEl.appendChild(sidebarButton("&plus; Add new project"));

  return sidebarEl;
}

function addListeners(sidebar) {
  sidebar.addEventListener("addProject", (e) => addProjectClicked(e));
  sidebar.addEventListener("selectProject", (e) => selectProject(e));
  sidebar.addEventListener("enterProject", (e) => getEnteredProject(e));
  sidebar.addEventListener("cancelProject", (e) => cancelNewProject(e));
}

function getStyleString() {
  return `
    #sidebar {
      color: #211A1D;
      background-color: #F1E3F3;

      width: 20%;

      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 10px;
    }

    #sidebar h3 {
      text-align: center;

      width: 60%;
      
      padding: 15px 0;
      margin: 15px 0;
 
      border-bottom: 1px solid black;
    }
  `;
}

//--------------

function addProjectClicked(e) {
  const sidebar = e.currentTarget;
  const button = e.target;
  const input = sidebarInput();

  sidebar.removeChild(button);
  sidebar.appendChild(input);
}

function selectProject(e) {
  const sidebarButtons = e.currentTarget.querySelectorAll("button");
  sidebarButtons.forEach(button => {
    button.classList.remove("sidebarButton_selected");
  });

  const button = e.target;
  button.classList.add("sidebarButton_selected")
}

function getEnteredProject(e) {
  const sidebar = e.currentTarget;
  const input = e.target;
  const projectName = e.detail.text();

  sidebar.removeChild(input);
  sidebar.appendChild(sidebarButton(projectName));
  sidebar.appendChild(sidebarButton("&plus; Add new project"));
}

function cancelNewProject(e) {
  const sidebar = e.currentTarget;
  const input = e.target;

  sidebar.removeChild(input);
  sidebar.appendChild(sidebarButton("&plus; Add new project"));
}

export default sidebar;
