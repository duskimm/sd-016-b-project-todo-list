const btnTask = document.getElementById('criar-tarefa');

btnTask.addEventListener('click', () => {
  const nameTask = document.getElementById('texto-tarefa').value;
  const listTasks = document.getElementById('lista-tarefas');
  const newTask = document.createElement('li');
  newTask.innerText = nameTask;
  listTasks.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
});
