import "./style.css";
import header from "./components/header";
import background from "./components/background";
import footer from "./components/footer";

import sidebar from "./components/sidebar";
import todoList from "./components/todoList";
// import todo from "./components/todo";

function setupPage(contentHook) {
  contentHook.appendChild(header());
  contentHook.appendChild(background());
  contentHook.appendChild(footer());
}

const hook = document.querySelector("#content");
setupPage(hook);

const backgroundHook = document.querySelector("#main");
backgroundHook.appendChild(sidebar());
backgroundHook.appendChild(todoList());
