import './css/main.css';
import { Project } from './classes/project.js';
import { Todo } from './classes/todo.js';
import { refreshProjectsList } from './domrendering/projectsList.js';
import { renderHome } from './domrendering/home.js';
import { newProjectModalInit } from './modals/newProjectModal.js';

// Display exports
export const projectsList = document.querySelector('.bottom-part ul');
export const projectDisplay = document.querySelector('.display');

// User Related Exports
export const userProjects = [];

// New Project Modal
export const newProjectModal = document.querySelector('.new-project-modal');
export const modalTitleInput = document.querySelector('.modal #title');
export const modalDateInput = document.querySelector('.modal #date');
export const modalDescrInput = document.querySelector('.modal #descr');
export const modalOpenCloseBtns = document.querySelectorAll('.modal-openclose');
export const modalSubmit = document.querySelector('.modal button');


// TESTING AREA
const newProject = new Project('FirstProj', '10.10.2022', 'Some description');
userProjects.push(newProject);
export const currentProject = userProjects[0];

const newTodo = new Todo('some random todo text');
const secondTodo = new Todo('second todo', true);
// newTodo.completed = true;
newProject.addTodo(newTodo);
newProject.addTodo(secondTodo);

const jsonStringify = JSON.stringify(newProject);
// console.log(jsonStringify);

newProjectModalInit();
refreshProjectsList();
renderHome(currentProject);
