const botao = document.getElementById('criar-tarefa');
const input = document.getElementById('texto-tarefa');
const listaDeTarefas = document.getElementById('lista-tarefas');

function novaTarefa(tarefa) {
  if (tarefa.target === botao && input.value !== '') {
    const criaTarefa = document.createElement('li');
    criaTarefa.setAttribute('class', 'teste');
    listaDeTarefas.appendChild(criaTarefa).innerHTML = input.value;
    input.value = '';
  }
}
document.addEventListener('click', novaTarefa);

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

listaDeTarefas.addEventListener('click', addRemoveClass);
