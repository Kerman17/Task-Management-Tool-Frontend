mainContainerElementUsers = document.querySelector('.js-main-container-grid');
let htmlUsers = ``;

async function loadUsers() {
    const response = await fetch('http://localhost:8080/api/v1/users').then((response) => {
        console.log(response);
        return response.json();
    }).then((users) => {
        users.forEach((user) => {
            //console.log(user.id + ' ' + user.name + ' ' + user.email);
            htmlUsers +=
                `
                <div class="user-card">
                    <p>Name: ${user.name}</p>
                    <p>Email: ${user.email}</p>
                </div>
            `
        })
    })
}

loadUsers();

const userListener = document.querySelector('.js-team')
    .addEventListener('click', () => {
        console.log(htmlUsers);
        mainContainerElementUsers.innerHTML = htmlUsers;
        console.log(mainContainerElementUsers.innerHTML);
    })