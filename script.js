function addTask(list) {
  const input = document.querySelector('#texto-tarefa');
  const task = document.createElement('li');
  task.innerText = input.value;
  input.value = '';
  list.appendChild(task);
}

window.onload = () => {
  const list = document.querySelector('#lista-tarefas');
  const createTaskBtn = document.querySelector('#criar-tarefa');

  createTaskBtn.addEventListener('click', () => {
    addTask(list);
  });
};
