import "./style.css";
import header from "./components/header";
import background from "./components/background";
import footer from "./components/footer";

import sidebar from "./components/core/sidebarContainer";
import todoContainer from "./components/core/todoContainer";

function setupPage(contentHook) {
  contentHook.appendChild(header());
  contentHook.appendChild(background());
  contentHook.appendChild(footer());
}

function createProject() {
  
}

const hook = document.querySelector("#content");
setupPage(hook);

const backgroundHook = document.querySelector("#main");
backgroundHook.appendChild(sidebar());
backgroundHook.appendChild(todoContainer());
