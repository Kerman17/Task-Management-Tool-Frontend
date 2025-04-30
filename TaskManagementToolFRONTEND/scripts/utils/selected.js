// This file is responsible for the selection of the menu items in the header
document.querySelector('.js-projects')
    .addEventListener('click', () => {
        deselectAll();
        document.querySelector('.js-projects').classList.add("selected");

        document.querySelector('.header')
            .innerHTML = "Projects List <button class='add-project'>Add Project</button> ";


        const addProjectButton = document.querySelector('.add-project')
            .addEventListener('click', () => {
                window.location.href = 'addproject.html';
            });
    })

document.querySelector('.js-home')
    .addEventListener('click', () => {
        deselectAll();
        document.querySelector('.js-home').classList.add("selected");

        document.querySelector('.header')
            .innerHTML = "Welcome <span class=special>Raul</span> to the Task Management Tool";

    })

document.querySelector('.js-team')
    .addEventListener('click', () => {
        deselectAll();
        document.querySelector('.js-team').classList.add("selected");
    })

document.querySelector('.js-tasks')
    .addEventListener('click', () => {
        deselectAll();
        document.querySelector('.js-tasks').classList.add("selected");
    })

document.querySelector('.js-calendar')
    .addEventListener('click', () => {
        deselectAll();
        document.querySelector('.js-calendar').classList.add("selected");
    })

function deselectAll() {
    document.querySelector('.js-home').classList.remove("selected");
    document.querySelector('.js-projects').classList.remove("selected");
    document.querySelector('.js-team').classList.remove("selected");
    document.querySelector('.js-tasks').classList.remove("selected");
    document.querySelector('.js-calendar').classList.remove("selected");
}