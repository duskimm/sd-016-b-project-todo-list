const btnTask = document.getElementById('criar-tarefa');

function removeClass(list) {
  list.forEach((item) => {
    item.classList.remove('active-task');
  });
}

function itemTask() {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  tasks.forEach((item) => {
    item.addEventListener('click', () => {
      const element = item;
      removeClass(tasks);
      element.classList.add('active-task');
    });
  });
}

btnTask.addEventListener('click', () => {
  const nameTask = document.getElementById('texto-tarefa').value;
  const listTasks = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = nameTask;
  listTasks.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
  itemTask();
});
