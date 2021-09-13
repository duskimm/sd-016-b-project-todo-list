const LISTA_TAREFAS = 'lista-tarefas';
const btnAdd = document.querySelector('#criar-tarefa');
const addTarefa = document.querySelector('#texto-tarefa');
const olTasks = document.getElementById(LISTA_TAREFAS);
const arrayLi = document.getElementById(LISTA_TAREFAS).childNodes;
const btnClean = document.getElementById('apaga-tudo');
const btnCleanComp = document.getElementById('remover-finalizados');
const btnUp = document.getElementById('mover-cima');
const btnDown = document.getElementById('mover-baixo');
const btnRemove = document.getElementById('remover-selecionado');

function criaTarefa() {
  const newTask = document.createElement('li');
  newTask.innerText = addTarefa.value;
  olTasks.appendChild(newTask);
  addTarefa.value = null;
}

function resetBackground() {
  for (let i = 0; i < arrayLi.length; i += 1) {
    arrayLi[i].classList.remove('selected');
    arrayLi[i].style.backgroundColor = 'aquamarine';
  }
}

btnAdd.addEventListener('click', criaTarefa);

olTasks.addEventListener('click', (evt) => {
  const event = evt;
  resetBackground();
  event.target.style.backgroundColor = 'rgb(128,128,128)';
  event.target.classList.add('selected');
});

btnClean.addEventListener('click', () => {
  const node = document.getElementById(LISTA_TAREFAS);
  while (node.firstChild) {
    node.removeChild(node.lastChild);
  }
});

btnUp.addEventListener('click', () => {
  for (let i = 1; i < arrayLi.length; i += 1) {
    if (arrayLi[i].classList.contains('selected')) {
      olTasks.insertBefore(arrayLi[i], arrayLi[i].previousSibling);
    }
  }
});

olTasks.addEventListener('dblclick', (evt) => {
  if (!evt.target.classList.contains('completed')) {
    evt.target.classList.add('completed');
  } else {
    evt.target.classList.remove('completed');
  }
});

btnDown.addEventListener('click', () => {
  for (let i = 0; i < arrayLi.length - 1; i += 1) {
    if (arrayLi[i].classList.contains('selected')) {
      olTasks.insertBefore(arrayLi[i].nextSibling, arrayLi[i]);
      break;
    }
  }
});

btnCleanComp.addEventListener('click', () => {
  for (let i = arrayLi.length - 1; i >= 0; i -= 1) {
    if (arrayLi[i].classList.contains('completed')) {
      arrayLi[i].remove();
    }
  }
});

btnRemove.addEventListener('click', () => {
  for (let i = 0; i < arrayLi.length; i += 1) {
    if (arrayLi[i].classList.contains('selected')) {
      olTasks.removeChild(arrayLi[i]);
    }
  }
});
