const btnTask = document.getElementById('criar-tarefa');
const btnRemove = document.getElementById('apaga-tudo');
const btnSave = document.getElementById('salvar-tarefas');
const btnFinish = document.getElementById('remover-finalizados');

function removeClass(list) {
  list.forEach((item) => {
    item.classList.remove('active-task');
  });
}

function checkTask(event) {
  event.target.classList.toggle('completed');
}

function captureTasks() {
  const arrTasks = document.querySelectorAll('.tarefa');
  arrTasks.forEach((item) => {
    item.addEventListener('dblclick', checkTask);
  });
  // setTimeout(() => {
  // }, 300);
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

function saveTasks() {
  let taskAttr = '';
  const getTasks = document.querySelectorAll('.tarefa');
  for (let i = 0; i < getTasks.length; i += 1) {
    taskAttr = `${taskAttr}${getTasks[i].className}_${getTasks[i].innerText}&`;
  }
  return localStorage.setItem('tasks', taskAttr);
}

function applyClass(textTasks, nameClass) {
  const li = document.createElement('li');
  li.innerText = textTasks;
  if (nameClass.length > 1) {
    for (let j = 0; j < nameClass.length; j += 1) {
      li.classList.add(nameClass[j]);
    }
  } else {
    li.classList.add(nameClass);
  }
  return li;
}

function loadTasks() {
  const splitTasks = localStorage.getItem('tasks').split('&');
  const olTasks = document.getElementById('lista-tarefas');
  for (let i = 0; i < splitTasks.length; i += 1) {
    const liElement = splitTasks[i].split('_');
    const liText = liElement[1];
    const liClass = liElement[0].split(' ');
    if (liClass[0] !== '') {
      const task = applyClass(liText, liClass);
      olTasks.appendChild(task);
    }
  }
  itemTask();
  captureTasks();
}

window.onload = () => {
  if (localStorage.length > 0) {
    loadTasks();
  }
};

const itemsLi = document.getElementById('lista-tarefas');
btnTask.addEventListener('click', () => {
  const nameTask = document.getElementById('texto-tarefa').value;
  const listTasks = itemsLi;
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
  const list = itemsLi;
  /** Source: https://developer.mozilla.org/pt-BR/docs/Web/API/Node/removeChild */
  /** referência retirada do site da MDN Web Docs para remover todos os elementos filhos */
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
});

btnFinish.addEventListener('click', () => {
  const items = itemsLi;
  const selectTask = document.getElementsByClassName('completed');
  while (selectTask.length > 0) {
    items.removeChild(selectTask[selectTask.length - 1]);
  }
});

btnSave.addEventListener('click', saveTasks);
