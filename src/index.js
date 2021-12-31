import todo from "./components/todo";
import header from "./components/header";
import footer from "./components/footer";
import "./style.css";

const hook = document.querySelector("#content");

hook.appendChild(header());
hook.appendChild(footer());

