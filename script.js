const btnTask = document.getElementById('criar-tarefa');

function itemTask() {
  const tasks = document.querySelectorAll('#lista-tarefas li');
  tasks.forEach((item) => {
    item.addEventListener('click', () => {
      const element = item;
      element.style.backgroundColor = 'rgb(128, 128, 128)';
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
