import * as Styles from "../styles/style.js";
import sidebarButton from "./smol/sidebarButton.js";

function sidebar() {
  const sidebarEl = document.createElement("aside");
  sidebarEl.setAttribute("id", "sidebar");

  const sidebarHeading = document.createElement("h3");
  sidebarHeading.textContent = "Projects";

  sidebarEl.appendChild(sidebarHeading);
  sidebarEl.appendChild(sidebarButton("Project 1"));
  sidebarEl.appendChild(sidebarButton("&plus; Add new project"));

  Styles.applyStyle(getStyleString());
  return sidebarEl;
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

export default sidebar;
