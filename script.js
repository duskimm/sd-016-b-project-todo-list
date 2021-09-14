const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');
const clearAllTasksBtn = document.querySelector('#apaga-tudo');
const clearCompletedTaskBtn = document.querySelector('#remover-finalizados');

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

function completeTask(tasks) {
  let completed = false;

  tasks.forEach((task) => {
    task.addEventListener('dblclick', (event) => {
      const selectedTask = event.target;

      selectedTask.classList.add('completed');
      selectedTask.classList.remove('uncompleted');

      completed = !completed;

      if (!completed) {
        selectedTask.classList.remove('completed');
        selectedTask.classList.add('uncompleted');
      }
    });
  });
}

function clearAllTasks() {
  clearAllTasksBtn.addEventListener('click', () => {
    taskList.innerHTML = '';
  });
}

function clearCompletedTasks() {
  clearCompletedTaskBtn.addEventListener('click', () => {
    const completedTask = document.querySelectorAll('.completed');

    // Ref: Airton Lopes Help me :)
    completedTask.forEach((task) => {
      task.remove();
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
    completeTask(tasks);
    clearAllTasks();
    clearCompletedTasks();
  });
}

window.onload = () => {
  AddTask(addTaskBtn);
};
