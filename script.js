const input = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const criarTarefa = document.querySelector('#criar-tarefa');

function criadorDeTarefas() {
  const listaDeTarefasItem = document.createElement('li');
  listaDeTarefasItem.innerText = input.value;
  input.value = '';
  listaDeTarefas.appendChild(listaDeTarefasItem);
}

criarTarefa.addEventListener('click', criadorDeTarefas);