const taskInput = document.getElementById('texto-tarefa');
const taskList = document.getElementById('lista-tarefas');
const addTaskBtn = document.getElementById('criar-tarefa');

function addBackgroundToTask(tasks) {
  let taskState = {
    selected: false,
  };
  tasks.forEach((task) => {
    task.addEventListener('click', (event) => {
      const selectedTask = event.target;

      if (!taskState.selected) {
        selectedTask.style.backgroundColor = 'gray';
      } else {
        selectedTask.style.backgroundColor = 'white';
      }

      taskState = {
        selected: !taskState.selected,
      };
    });
  });
}

addTaskBtn.addEventListener('click', () => {
  const taskElement = document.createElement('li');
  taskElement.innerText = taskInput.value;
  taskElement.classList.add('task-item');
  taskList.appendChild(taskElement);
  taskInput.value = '';

  const tasks = document.querySelectorAll('.task-item');
  addBackgroundToTask(tasks);
});
