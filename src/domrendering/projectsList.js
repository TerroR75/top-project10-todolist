import { projectsList, userProjects } from '../index.js';

export function refreshProjectsList() {
    projectsList.innerHTML = '';

    for (let i = 0; i < userProjects.length; i++) {
        const newListElement = document.createElement('li');
        newListElement.dataset.id = i;

        newListElement.innerText = userProjects[i].title;

        projectsList.appendChild(newListElement);
    }
}