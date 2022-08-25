import { projectsList, userProjects, setCurrentProject } from '../index.js';

export function refreshProjectsList() {
    projectsList.innerHTML = '';

    for (let i = 0; i < userProjects.length; i++) {
        const newListElement = document.createElement('li');
        newListElement.dataset.id = i;

        newListElement.innerText = userProjects[i].title;

        projectsList.appendChild(newListElement);
    }

    addEventListeners();

}

function addEventListeners() {
    const projectList = document.querySelectorAll('.bottom-part li');


    projectList.forEach(project => {
        project.addEventListener('click', () => {
            if (!project.classList.contains('active-project')) {
                for (let proj of projectList) {
                    proj.classList.remove('active-project');
                }
                setCurrentProject(parseInt(project.dataset.id));
                project.classList.add('active-project');
            }
        });
    });
}