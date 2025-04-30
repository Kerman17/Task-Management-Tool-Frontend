

const createProjectButton = document.getElementById("create-btn");

createProjectButton.addEventListener("click", async () => {
    const name = document.getElementById("project-name-input").value;
    const description = document.getElementById("project-description-input").value;
    const created_by = document.getElementById("project-created-by-input").value;

    const projectData = {
        name,
        description,
        created_by
    };

    // console.log(JSON.stringify(projectData));

    if (name && description && created_by) {
        try {
            const response = await fetch('http://localhost:8080/api/v1/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(projectData)
            });

            if (response.ok) {
                alert("Project created successfully!");

                window.location.href = "index.html";
                deselectAll();
                document.querySelector('.js-projects').classList.add("selected");
            } else {
                alert("Failed to create project. Please check your input.");
            }
        } catch (error) {
            console.error("Error creating project:", error);

        }
    } else {
        alert("Failed to create project. Please check your input.");
    }
})