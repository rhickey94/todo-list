import { projects } from "./sidebar";
import Task from "../../objects/Task";

import * as Styles from "../../styles/style";
import todo from "./todoList/todo";
import todoInput from "./todoList/todoInput";

function todoList() {
  const todoList = componentSetup();

  addListeners(todoList);

  return todoList;
}

function componentSetup() {
  Styles.applyStyle(getStyleString());
  const todoList = document.createElement("ul");
  todoList.setAttribute("id", "todoList");

  renderTasks(todoList);

  return todoList;
}

function addListeners(todoList) {
  todoList.addEventListener("enterTodo", (e) => createTask(e));
  todoList.addEventListener("deleteTodo", (e) => deleteTask(e));
  todoList.addEventListener("completeTodo", (e) => deleteTask(e));
}

function getStyleString() {
  return `
    #todoList {
      background-color: #BAD1CD;
      padding: 5% 10%;

      flex-grow: 1;
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
  `;
}

function createTask(e) {
  const todoList = e.currentTarget;
  const todoText = e.detail.text();

  const todo = {
    title: todoText,
  };
  const task = Task(todo);
  projects.getCurrentProject().addTask(task);

  renderTasks(todoList, projects.getCurrentProject().getTasks());
}

function deleteTask(e) {
  const todoList = e.currentTarget;
  const newTasks = projects.getCurrentProject().getTasks();
  const taskIndex = e.target.parentNode.parentNode.dataset.index;

  console.log(newTasks);
  console.log(taskIndex)
  newTasks.splice(taskIndex, 1)
  console.log(newTasks)

  projects.getCurrentProject().setTasks(newTasks);
  renderTasks(todoList, projects.getCurrentProject().getTasks());
}

export function renderTasks(todoList, tasks = []) {
  todoList.innerHTML = "";
  let taskCounter = 0;

  tasks.forEach((task) => {
    const newTodo = todo(task);
    newTodo.setAttribute("data-index", taskCounter)
    taskCounter++;
    todoList.appendChild(newTodo);
  });

  todoList.appendChild(todoInput());
}

export default todoList;
