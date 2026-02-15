const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

let tasks = [];

button.addEventListener("click", () => {
    const value = input.value.trim();

    if(value === "") return;

    if(tasks.includes(value)) return;

    tasks.push(value);

    renderTasks();

    input.value = "";
});

function renderTasks() {

    list.innerHTML = "";

    tasks.forEach(task => {

        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
    });

}

list.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        const clickedText = event.target.textContent;
        tasks = tasks.filter(task => task !== clickedText);
        renderTasks();
    }
});
