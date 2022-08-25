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

    console.log('renderHome (home.js)');
    renderProjectTodosList(project);
}

function renderProjectTodosList(project) {
    let todosOl = document.querySelector('.todos ol');
    todosOl.innerHTML = '';

    for (let i = 0; i < project.todosArray.length; i++) {
        // List element itself creation
        let newLi = document.createElement('li');
        newLi.classList.add('project-todo');
        if (project.todosArray[i].completed === true) {
            newLi.classList.add('todo-completed');
        }
        newLi.innerText = project.todosArray[i].text;
        todosOl.appendChild(newLi);

        // Buttons for list element creation
        const iconCheckBtn = document.createElement('i');
        iconCheckBtn.classList.add('fa-solid', 'fa-check');
        iconCheckBtn.dataset.id = i;

        const iconDeleteBtn = document.createElement('i');
        iconDeleteBtn.classList.add('fa-solid', 'fa-xmark');
        iconDeleteBtn.dataset.id = i;

        newLi.appendChild(iconCheckBtn);
        newLi.appendChild(iconDeleteBtn);

        iconCheckBtn.addEventListener('click', () => {
            newLi.classList.toggle('todo-completed');
            if (project.todosArray[parseInt(iconCheckBtn.dataset.id)].completed === false) {
                project.todosArray[parseInt(iconCheckBtn.dataset.id)].completed = true;
            }
            else {
                project.todosArray[parseInt(iconCheckBtn.dataset.id)].completed = false;
            }

        });

        iconDeleteBtn.addEventListener('click', () => {
            project.todosArray.splice(parseInt(iconDeleteBtn.dataset.id), 1);
            renderProjectTodosList(project);
        });

    }
}