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


listaDeTarefas.addEventListener('click', corCinza);
criarTarefa.addEventListener('click', criadorDeTarefas);
