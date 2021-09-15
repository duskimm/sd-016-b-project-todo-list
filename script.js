const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');
const botaoApagaAll = document.getElementById('apaga-tudo');

function novaTarefa() {
  //if (tarefa.target === botao && input.value !== '') {
    const criaTarefa = document.createElement('li');
    criaTarefa.setAttribute('class', 'teste');
    listaDeTarefas.appendChild(criaTarefa).innerHTML = input.value;
    input.value = '';
  //}
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


const riscaTarefa = 'completed';
function riscaCompleto(event) {
  const confereClass = event.target.classList.contains(riscaTarefa);
  console.log(confereClass);
  if (confereClass === false) {
    event.target.classList.add(riscaTarefa);
    console.log(event.target);
  } else {
    event.target.classList.remove(riscaTarefa);
  }
}

function apagaTudo() {
  listaDeTarefas.innerHTML = '';
}

botao.addEventListener('click', novaTarefa);
listaDeTarefas.addEventListener('dblclick', riscaCompleto);
listaDeTarefas.addEventListener('click', addRemoveClass);
botaoApagaAll.addEventListener('click', apagaTudo);
