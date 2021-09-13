function selectTask(event) {
  const lis = document.getElementsByTagName('li');
  const task = event.target;
  for (let i = 0; i < lis.length; i += 1) {
    lis[i].classList.remove('selected');
  }
  task.classList.add('selected');
}

function addTask(list) {
  const input = document.querySelector('#texto-tarefa');
  const task = document.createElement('li');
  task.addEventListener('click', selectTask);
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
