const btnAdd = document.querySelector('#criar-tarefa');
const addTarefa = document.querySelector('#texto-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const arrayLi = document.getElementById('lista-tarefas').children;
const btnClean = document.getElementById('apaga-tudo');
const btnCleanComp = document.getElementById('remover-finalizados');
const btnUp = document.getElementById('mover-cima');

function criaTarefa() {
  const newTask = document.createElement('li');
  newTask.innerText = addTarefa.value;
  olTasks.appendChild(newTask);
  addTarefa.value = null;
}

function resetBackground() {
  for (let i = 0; i < arrayLi.length; i += 1) {
    arrayLi[i].style.backgroundColor = 'aquamarine';
  }
}

btnAdd.addEventListener('click', criaTarefa);

olTasks.addEventListener('click', (evt) => {
  resetBackground();
  evt.target.style.backgroundColor = 'rgb(128,128,128)';
});

btnClean.addEventListener('click', () => {
  const node = document.getElementById('lista-tarefas');
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
});

olTasks.addEventListener('dblclick', (evt) => {
  if (evt.target.className !== 'completed') {
    evt.target.classList.add('completed');
  } else {
    evt.target.className = '';
  }
});

btnCleanComp.addEventListener('click', () => {
  for (let i = arrayLi.length - 1; i >= 0; i -= 1) {
    if (arrayLi[i].className === 'completed') {
      arrayLi[i].remove();
    }
  }
});
