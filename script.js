const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');

function resetSelected() {
  const AllTaks = document.querySelectorAll('.task-item');
  AllTaks.forEach((oneTask) => {
    const task = oneTask;
    task.classList.remove('selected');
    task.style.backgroundColor = 'white';
  });
}

function addBackgroundToTask(tasks) {
  tasks.forEach((task) => {
    task.addEventListener('click', (event) => {
      const selectedTask = event.target;
      resetSelected();
      selectedTask.classList.add('selected');
      if (selectedTask.classList.contains('selected')) {
        selectedTask.style.backgroundColor = 'gray';
      }
    });
  });
}
function AddTask(buttonElement) {
  buttonElement.addEventListener('click', () => {
    const taskElement = document.createElement('li');
    taskElement.innerText = taskInput.value;
    taskElement.classList.add('task-item');
    taskList.appendChild(taskElement);
    taskInput.value = '';

    const tasks = document.querySelectorAll('.task-item');
    addBackgroundToTask(tasks);
  });
}

window.onload = () => {
  AddTask(addTaskBtn);
};
