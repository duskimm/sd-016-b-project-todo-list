const tasksList = document.getElementById('lista-tarefas');
const addButton = document.getElementById('criar-tarefa');
const removeButton = document.getElementById('apaga-tudo');
const inputt = document.getElementById('texto-tarefa');
const tasks = document.getElementsByClassName('tasks');
const finishedButton = document.getElementById('remover-finalizados');

addButton.addEventListener('click', () => {
  const elementLi = document.createElement('li');
  const text = inputt.value;
  elementLi.className = 'tasks';
  tasksList.appendChild(elementLi);
  elementLi.innerText = text;
  inputt.value = '';
});

tasksList.addEventListener('click', (event) => {
  const eventt = event.target;
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].style.backgroundColor = '';
  }
  eventt.style.backgroundColor = 'rgb(128, 128, 128)';
});

tasksList.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

removeButton.addEventListener('click', () => {
  for (let i = 0; i < tasks.length; i = 0) {
    tasksList.removeChild(tasks[i]);
  }
// Créditos ao Léo.
});

finishedButton.addEventListener('click', () => {
  while (document.querySelector('.completed')) {
    document.querySelector('.completed').remove();
  }
// Créditos ao Gabriel Rodrigues Leite.
});
