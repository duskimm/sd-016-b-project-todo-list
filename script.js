const input = document.querySelector('#texto-tarefa');
const listaDeTarefas = document.querySelector('#lista-tarefas');
const criarTarefa = document.querySelector('#criar-tarefa');
const apagaTarefa = document.querySelector('#apaga-tudo');
const removeFinalizados = document.querySelector('#remover-finalizados')

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

function apagarTarefas() {
  listaDeTarefas.innerHTML = ''
}

function removerFinalizados(){
  const finalizado = document.querySelectorAll('.completed')
  for (let index = 0; index < finalizado.length; index += 1) {
     finalizado[index].remove();
  }
}


criarTarefa.addEventListener('click', criadorDeTarefas);
listaDeTarefas.addEventListener('click', corCinza);
listaDeTarefas.addEventListener('dblclick', lineThrough);
apagaTarefa.addEventListener('click', apagarTarefas);
removeFinalizados.addEventListener('click', removerFinalizados);