import { project1 } from "../../../testData";
import { renderTasks } from "./todoList";
import Project from "../../objects/Project";
import Projects from "../../objects/Projects";

import * as Styles from "../../styles/style";
import sidebarButton from "./sidebar/sidebarButton";
import sidebarInput from "./sidebar/sidebarInput";

export const projects = Projects([project1]);
projects.setCurrentProject(project1);

function sidebarContainer() {
  const sidebarEl = componentSetup();

  addListeners(sidebarEl);

  return sidebarEl;
}

function componentSetup() {
  Styles.applyStyle(getStyleString());
  const sidebarEl = document.createElement("aside");
  sidebarEl.setAttribute("id", "sidebar");

  renderProjects(sidebarEl);

  return sidebarEl;
}

function addListeners(sidebar) {
  sidebar.addEventListener("addProject", (e) => addProjectClicked(e));
  sidebar.addEventListener("selectProject", (e) => selectProject(e));
  sidebar.addEventListener("enterProject", (e) => getEnteredProject(e));
  sidebar.addEventListener("cancelProject", (e) => cancelNewProject(e));
  sidebar.addEventListener("enterTodo", (e) => console.log(e));
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

function renderProjects(sidebar) {
  sidebar.innerHTML = "";

  const sidebarHeading = document.createElement("h3");
  sidebarHeading.textContent = "Projects";

  sidebar.appendChild(sidebarHeading);

  projects.getProjects().forEach((project) => {
    sidebar.appendChild(sidebarButton(project.getName()));
  });
  sidebar.appendChild(sidebarButton("&plus; Add new project"));
}

function addProjectClicked(e) {
  const sidebar = e.currentTarget;
  const button = e.target;
  const input = sidebarInput();

  sidebar.removeChild(button);
  sidebar.appendChild(input);
  document.querySelector(".sidebarInput").focus();
}

function getEnteredProject(e) {
  const sidebar = e.currentTarget;
  const projectName = e.detail.text();

  projects.addProject(Project(projectName));

  renderProjects(sidebar);
}

function selectProject(e) {
  const sidebarButtons = e.currentTarget.querySelectorAll("button");
  sidebarButtons.forEach((button) => {
    button.classList.remove("sidebarButton_selected");
  });

  const button = e.target;
  button.classList.add("sidebarButton_selected");

  const projectName = button.textContent;
  const project = projects
    .getProjects()
    .filter((selectedProject) => selectedProject.getName() === projectName)[0];

  projects.setCurrentProject(project);

  const projectTasks = project.getTasks();

  const todoList = document.querySelector("#todoList");

  renderTasks(todoList, projectTasks);
}

function cancelNewProject(e) {
  const sidebar = e.currentTarget;
  const input = e.target;

  sidebar.removeChild(input);
  sidebar.appendChild(sidebarButton("&plus; Add new project"));
}

export default sidebarContainer;
