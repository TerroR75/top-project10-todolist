import './css/main.css';
import { Project } from './classes/project.js';
import { Todo } from './classes/todo.js';
import { refreshProjectsList } from './domrendering/projectsList.js';
import { renderHome } from './domrendering/home.js';

export const projectsList = document.querySelector('.bottom-part ul');
export const projectDisplay = document.querySelector('.display');
export const userProjects = [];


const newProject = new Project('FirstProj', '10.10.2022', 'Some description');
userProjects.push(newProject);
export const currentProject = userProjects[0];




console.log(projectsList);

refreshProjectsList();
renderHome();