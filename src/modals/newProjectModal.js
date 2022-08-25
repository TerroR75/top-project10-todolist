import {
    newProjectModal,
    modalTitleInput,
    modalDateInput,
    modalDescrInput,
    modalOpenCloseBtns,
    modalSubmit,
    userProjects,
    saveData,
} from '../index.js';
import { Project } from '../classes/project.js';
import { refreshProjectsList } from '../domrendering/projectsList.js';


export function newProjectModalInit() {
    modalOpenCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            newProjectModal.classList.toggle('modal-visible');
        });
    });

    modalSubmit.addEventListener('click', () => {
        if (modalTitleInput.value !== '' && modalDateInput.value !== '' && modalDescrInput.value !== '') {
            userProjects.push(new Project(modalTitleInput.value, modalDateInput.value, modalDescrInput.value));

            modalTitleInput.value = '';
            modalDateInput.value = '';
            modalDescrInput.value = '';

            newProjectModal.classList.toggle('modal-visible');
            refreshProjectsList();
            saveData();
        }
    })
}


