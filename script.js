function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    
    const li = document.createElement('li');
    li.textContent = taskText;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = () => li.remove();

    li.onclick = () => li.classList.toggle('completed');

    li.appendChild(deleteButton);
    taskList.appendChild(li);

    taskInput.value = '';
}
