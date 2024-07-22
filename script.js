const taskList = document.getElementById("taskList");

// Add Task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const task = { id: Date.now(), text: taskText, completed: false };
        displayTask(task);
        taskInput.value = "";
        saveTask(task);
    }
}

// Display Task
function displayTask(task) {
    const li = document.createElement("li");
    li.setAttribute("data-id", task.id);
    li.innerHTML = `
        <span class="task-text ${task.completed ? 'completed' : ''}">${task.text}</span>
        <div class="actions">
            <button onclick="toggleCompletion(${task.id})">${task.completed ? 'Undo' : 'Done'}</button>
            <button class="edit" onclick="editTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;
    taskList.appendChild(li);
}

// Toggle Completion
function toggleCompletion(id) {
    const taskElement = document.querySelector(`li[data-id="${id}"]`);
    const taskTextElement = taskElement.querySelector('.task-text');
    const isCompleted = taskTextElement.classList.toggle('completed');
    updateTaskCompletion(id, isCompleted);
}

// Edit Task
function editTask(id) {
    const taskElement = document.querySelector(`li[data-id="${id}"]`);
    const taskTextElement = taskElement.querySelector('.task-text');
    const newText = prompt("Edit task:", taskTextElement.textContent);
    if (newText !== null) {
        taskTextElement.textContent = newText;
        updateTaskText(id, newText);
    }
}

// Delete Task
function deleteTask(id) {
    const taskElement = document.querySelector(`li[data-id="${id}"]`);
    taskElement.remove();
    removeTask(id);
}

// Simulated API functions (replace with actual backend calls)
function saveTask(task) {
    // Simulated backend storage (in-memory for demo)
    tasks.push(task);
}

function updateTaskCompletion(id, completed) {
    // Simulated backend update (in-memory for demo)
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = completed;
    }
}

function updateTaskText(id, text) {
    // Simulated backend update (in-memory for demo)
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.text = text;
    }
}

function removeTask(id) {
    // Simulated backend remove (in-memory for demo)
    tasks = tasks.filter(t => t.id !== id);
}

// Initialize with existing tasks (replace with actual backend fetch)
const tasks = [];

// Display existing tasks
tasks.forEach(task => displayTask(task));
