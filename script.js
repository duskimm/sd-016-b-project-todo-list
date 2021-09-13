const btnAdd = document.querySelector('#criar-tarefa');
const addTarefa = document.querySelector('#texto-tarefa');
const olTasks = document.getElementById('lista-tarefas');
const arrayLi = document.getElementById('lista-tarefas').children;
const btnClean = document.getElementById('apaga-tudo');
const btnCleanComp = document.getElementById('remover-finalizados');

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
