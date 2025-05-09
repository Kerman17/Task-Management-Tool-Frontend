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

        mainContainerElement.innerHTML = "";

        document.querySelector('.js-home').classList.add("selected");

        document.querySelector('.header')
            .innerHTML = "Welcome <span class=special>Raul</span> to the Task Management Tool";

        document.querySelector('.main-container-grid')
            .innerHTML = `
        <div>
                    <div class="img-wrapper"><img
                            src="https://images.unsplash.com/photo-1746457421535-60ef4cb6d8d4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""></div>
                    <p>Rainy day</p>
                </div>

                <div>
                    <div class="img-wrapper"><img
                            src="https://images.unsplash.com/photo-1746591948888-7cc1e170c17b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""></div>
                    <p>Flowers</p>
                </div>

                <div>
                    <div class="img-wrapper"><img
                            src="https://images.unsplash.com/photo-1743359610666-8d33497f6b70?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""></div>
                    <p>Singularity</p>
                </div>

                <div>
                    <div class="img-wrapper"><img
                            src="https://images.unsplash.com/photo-1746150361891-a61a9f6703c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""></div>
                    <p>Shops</p>
                </div>

                <div>
                    <div class="img-wrapper"><img
                            src="https://images.unsplash.com/photo-1746647819581-19604d0f04c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""></div>
                    <p>Water</p>
                </div>
        `


    })

document.querySelector('.js-team')
    .addEventListener('click', () => {
        deselectAll();
        document.querySelector('.js-team').classList.add("selected");


        document.querySelector('.header')
            .innerHTML = "Team members";


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