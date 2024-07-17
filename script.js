// Setup Event Listener for Page Load
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM Elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Create the addTask Function
    function addTask() {
        const taskText = taskInput.value.trim();

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
        };

        listItem.appendChild(removeBtn);
        taskList.appendChild(listItem);

        // Clear the task input field
        taskInput.value = '';
    }

    // Attach Event Listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
