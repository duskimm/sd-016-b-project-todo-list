const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const botaoApagaAll = document.getElementById('apaga-tudo');
const btnRemovePronto = document.getElementById('remover-finalizados');

function novaTarefa() {
  const criaTarefa = document.createElement('li');
  criaTarefa.setAttribute('class', 'teste');
  listaDeTarefas.appendChild(criaTarefa).innerHTML = input.value;
  input.value = '';
}

const listSelect = 'list-select';
function addRemoveClass(event) {
  const confereClass = event.target.classList.contains(listSelect);
  if (confereClass === true) {
    event.target.classList.remove(listSelect);
  } else {
    for (let i = 0; i < listaDeTarefas.children.length; i += 1) {
      listaDeTarefas.children[i].classList.remove(listSelect);
      event.target.classList.add(listSelect);
    }
  }
}

const tarefaRiscada = 'completed';
function riscaCompleto(event) {
  const confereClass = event.target.classList.contains(tarefaRiscada);
  console.log(confereClass);
  if (confereClass === false) {
    event.target.classList.add(tarefaRiscada);
    console.log(event.target);
  } else {
    event.target.classList.remove(tarefaRiscada);
  }
}

function apagaTudo() {
  listaDeTarefas.innerHTML = '';
}

function apagaCompletos() {
  const pegaComplete = document.querySelectorAll('#lista-tarefas li');
  for (let i = 0; i < pegaComplete.length; i += 1) {
    if (pegaComplete[i].classList.contains(tarefaRiscada)) {
      pegaComplete[i].remove();
    }
  }
}

botao.addEventListener('click', novaTarefa);
listaDeTarefas.addEventListener('dblclick', riscaCompleto);
listaDeTarefas.addEventListener('click', addRemoveClass);
botaoApagaAll.addEventListener('click', apagaTudo);
btnRemovePronto.addEventListener('click', apagaCompletos);
