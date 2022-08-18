import { projectDisplay } from '../index.js';


export function renderHome(project) {
    projectDisplay.innerHTML = '';

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
    titleHOne.innerText = project.title;
    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    dateDiv.innerText = project.dueDate;
    const descrSpan = document.createElement('span');
    descrSpan.innerText = project.description;
    const orderedList = document.createElement('ol');

    // Elements appending
    projectDisplay.appendChild(projectContainer);

    projectContainer.appendChild(titleDiv);
    projectContainer.appendChild(descrDiv);
    projectContainer.appendChild(todosList);

    titleDiv.appendChild(titleHOne);
    titleDiv.appendChild(dateDiv);
    descrDiv.appendChild(descrSpan);
    todosList.appendChild(orderedList);

    renderProjectsTodosList(project);
}

// function updateHome() {
//     const title = projectDisplay.querySelector('.title h1');
//     const description = projectDisplay.querySelector('.description span');
// }


function renderProjectsTodosList(project) {
    const todosOl = document.querySelector('.todos ol');
    todosOl.innerHTML = '';

    for (let i = 0; project.todosArray.length; i++) {
        const newLi = document.createElement('li');
        newLi.classList.add('project-todo');
        if (project.todosArray[i].completed === true) {
            newLi.classList.add('todo-completed');
        }
        newLi.innerText = project.todosArray[i].text;
        todosOl.appendChild(newLi);

        const iconCheckElement = document.createElement('i');
        iconCheckElement.classList.add('fa-solid', 'fa-check');
        iconCheckElement.dataset.id = i;
        const iconXElement = document.createElement('i');
        iconXElement.classList.add('fa-solid', 'fa-xmark');
        iconXElement.dataset.id = i;

        newLi.appendChild(iconCheckElement);
        newLi.appendChild(iconXElement);


        faCheckTodoBtn(iconCheckElement, newLi, project);
        faXMarkTodoBtn(iconXElement, project);
    }
}

function faCheckTodoBtn(iconElement, listElement, project) {
    iconElement.addEventListener('click', () => {
        if (project.todosArray[parseInt(iconElement.dataset.id)].completed === false) {
            project.todosArray[parseInt(iconElement.dataset.id)].completed = true;
            listElement.classList.add('todo-completed');
        }
        else {
            project.todosArray[parseInt(iconElement.dataset.id)].completed = false;
            listElement.classList.remove('todo-completed');
        }
    })
}

function faXMarkTodoBtn(iconElement, project) {
    iconElement.addEventListener('click', () => {
        project.todosArray.splice(parseInt(iconElement.dataset.id), 1);
        console.log(project);
        renderProjectsTodosList(project);
    });

}
