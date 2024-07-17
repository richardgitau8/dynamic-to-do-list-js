// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Load tasks from Local Storage
    loadTasks();

    // Create the addTask Function
    function addTask(taskText, save = true) {
        // Check if taskText is provided
        if (typeof taskText === 'undefined') {
            taskText = taskInput.value.trim();
        }

        // Check if taskText is not empty
        if (taskText === '') {
            alert('Please enter a task');
            return;
        }

        // Task Creation and Removal
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.classList.add('remove-btn'); // Use classList.add to add the class

        removeBtn.onclick = () => {
            taskList.removeChild(listItem);
            removeTask(taskText);
        };

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';

        // Save task to Local Storage if save is true
        if (save) {
            saveTask(taskText);
        }
    }

    // Save task to Local Storage
    function saveTask(taskText) {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.push(taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Remove task from Local Storage
    function removeTask(taskText) {
        let storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks = storedTasks.filter(task => task !== taskText);
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    // Load tasks from Local Storage
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false)); // 'false' indicates not to save again to Local Storage
    }

    // Attach Event Listeners
    addButton.addEventListener('click', () => addTask());

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
