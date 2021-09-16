/* eslint-disable no-param-reassign */
const btnCreateTask = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const btnClearAll = document.getElementById('apaga-tudo');
const btnRemoveComplete = document.getElementById('remover-finalizados');
const btnRemoveSelect = document.getElementById('remover-selecionado');
const saveTask = document.getElementById('salvar-tarefas');
const btnMvUp = document.getElementById('mover-cima');
const btnMvDw = document.getElementById('mover-baixo');

btnCreateTask.addEventListener('click', () => {
  const taskInput = document.getElementById('texto-tarefa').value;
  if (taskInput !== '') {
    const newLine = document.createElement('li');
    newLine.innerHTML = taskInput;
    taskList.appendChild(newLine);
    document.getElementById('texto-tarefa').value = '';
  } else {
    alert('Entrada Inválida! Por favor, digite uma tarefa.');
  }
});

taskList.addEventListener('click', (event) => {
  const listItem = document.getElementsByTagName('li');
  // eslint-disable-next-line sonarjs/no-duplicate-string
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.id = 'isSelected';
  for (let i = 0; i < listItem.length; i += 1) {
    if (listItem[i] !== event.target) {
      listItem[i].style.backgroundColor = 'transparent';
      listItem[i].id = 'none';
    }
  }
});

taskList.addEventListener('dblclick', (event) => {
  if (event.target.className !== 'completed') {
    event.target.className = 'completed';
  } else {
    event.target.className = '';
  }
});

btnClearAll.addEventListener('click', () => {
  const lines = document.getElementsByTagName('li');
  for (let i = 0; i < lines.length; i += 0) {
    lines[i].remove();
  }
});

btnRemoveComplete.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let i = 0; i < completed.length; i += 1) {
    completed[i].remove();
  }
});

saveTask.addEventListener('click', () => {
  localStorage.clear();
  const list = document.getElementsByTagName('li');
  for (let item = 0; item < list.length; item += 1) {
    localStorage.setItem(item, list[item].innerHTML);
    localStorage.setItem(list[item].innerText, list[item].className);
  }
});

btnMvUp.addEventListener('click', () => {
  const tasks = document.getElementsByTagName('li');
  for (let i = 1; i < tasks.length; i += 1) {
    if (tasks[i].id === 'isSelected') {
      const aux = tasks[i].innerText;
      const auxClass = tasks[i].className;
      tasks[i].innerText = tasks[i - 1].innerText;
      tasks[i].className = tasks[i - 1].className;
      tasks[i - 1].innerText = aux;
      tasks[i - 1].className = auxClass;
      tasks[i - 1].style.backgroundColor = 'rgb(128,128,128)';
      tasks[i - 1].id = 'isSelected';
      tasks[i].style.backgroundColor = 'transparent';
      tasks[i].id = 'none';
    }
  }
});

btnMvDw.addEventListener('click', () => {
  const tasks = document.getElementsByTagName('li');
  for (let i = tasks.length - 2; i >= 0; i -= 1) {
    if (tasks[i].id === 'isSelected') {
      const aux = tasks[i].innerText;
      const auxClass = tasks[i].className;
      tasks[i].innerText = tasks[i + 1].innerText;
      tasks[i].className = tasks[i + 1].className;
      tasks[i + 1].innerText = aux;
      tasks[i + 1].className = auxClass;
      tasks[i + 1].style.backgroundColor = 'rgb(128,128,128)';
      tasks[i + 1].id = 'isSelected';
      tasks[i].style.backgroundColor = 'transparent';
      tasks[i].id = 'none';
    }
  }
});

btnRemoveSelect.addEventListener('click', () => {
  document.getElementById('isSelected').remove();
});

function loadList() {
  for (let i = 0; i < localStorage.length / 2; i += 1) {
    const localLine = document.createElement('li');
    localLine.innerText = localStorage.getItem(i);
    localLine.className = localStorage.getItem(localLine.innerText);
    taskList.appendChild(localLine);
  }
}

window.onload = loadList();
