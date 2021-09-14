const btnTask = document.getElementById('criar-tarefa');
const btnRemove = document.getElementById('apaga-tudo');

function removeClass(list) {
  list.forEach((item) => {
    item.classList.remove('active-task');
  });
}

function checkTask(event) {
  event.target.classList.toggle('completed');
}

function captureTasks() {
  setTimeout(() => {
    const arrTasks = document.querySelectorAll('.tarefa');
    arrTasks.forEach((item) => {
      item.addEventListener('dblclick', checkTask);
    });
  }, 300);
}

function itemTask() {
  const tasks = document.querySelectorAll('.tarefa');
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
  const taskTextNode = document.createTextNode(nameTask);
  newTask.classList.add('tarefa');
  newTask.appendChild(taskTextNode);
  listTasks.appendChild(newTask);
  document.getElementById('texto-tarefa').value = '';
  itemTask();
  captureTasks();
});

btnRemove.addEventListener('click', () => {
  const list = document.getElementById('lista-tarefas');
  // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild
  // referência retirada do site da MDN Web Docs para remover todos os elementos filhos
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});
