const input = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const criarTarefa = document.querySelector('#criar-tarefa');

function criadorDeTarefas() {
  const listaDeTarefasItem = document.createElement('li');
  listaDeTarefasItem.innerText = input.value;
  input.value = '';
  listaDeTarefas.appendChild(listaDeTarefasItem);
}

function corCinza(event) {
  const selected = document.querySelector('.selected');
  if (!selected) {
    event.target.classList.add('selected');
  } else {
    selected.classList.remove('selected');
    event.target.classList.add('selected');
  }
}

function lineThrough(event) {
  const tarefa = event.target.classList;
  if (tarefa.contains('completed')) {
    tarefa.remove('completed');
  } else {
    tarefa.add('completed');
  }
}

listaDeTarefas.addEventListener('dblclick', lineThrough);
listaDeTarefas.addEventListener('click', corCinza);
criarTarefa.addEventListener('click', criadorDeTarefas);

