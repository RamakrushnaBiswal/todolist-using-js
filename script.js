const taskInput = document.getElementById("task");
const taskList = document.getElementById("taskList");
const addTaskButton = document.getElementById("addTask");

addTaskButton.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <button class="edit">Edit</button>
            <button class="complete">Complete</button>
            <button class="delete">Delete</button>
        `;
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";

        const editButton = listItem.querySelector(".edit");
        const completeButton = listItem.querySelector(".complete");
        const deleteButton = listItem.querySelector(".delete");

        editButton.addEventListener("click", () => editTask(listItem));
        completeButton.addEventListener("click", () => completeTask(listItem));
        deleteButton.addEventListener("click", () => deleteTask(listItem));
    }
}

function editTask(listItem) {
    const taskTextElement = listItem.querySelector(".task-text");
    const newText = prompt("Edit task:", taskTextElement.textContent);
    if (newText !== null) {
        taskTextElement.textContent = newText;
    }
}

function completeTask(listItem) {
    listItem.classList.toggle("completed");
}

function deleteTask(listItem) {
    listItem.remove();
}