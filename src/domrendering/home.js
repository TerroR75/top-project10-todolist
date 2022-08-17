import { currentProject, projectDisplay } from '../index.js';


export function renderHome() {

    // Elements creation
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');
    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    const descrDiv = document.createElement('div');
    descrDiv.classList.add('description');
    const todosList = document.createElement('div');
    todosList.classList.add('todos');

    const titleHOne = document.createElement('h1');
    titleHOne.innerText = currentProject.title;
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    dateDiv.innerText = currentProject.date;
    const descrSpan = document.createElement('span');
    descrSpan.innerText = currentProject.description;
    const orderedList = document.createElement('ol');

    // Elements appending
    projectDisplay.appendChild(projectContainer);

    projectContainer.appendChild(titleDiv);
    projectContainer.appendChild(descrDiv);
    projectContainer.appendChild(todosList);

    titleDiv.appendChild(titleHOne, dateDiv);
    descrDiv.appendChild(descrSpan);
    todosList.appendChild(orderedList);
}

function updateHome() {
    const title = projectDisplay.querySelector('.title h1');
    const description = projectDisplay.querySelector('.description span');
}
