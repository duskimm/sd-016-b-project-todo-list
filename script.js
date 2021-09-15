const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const limpaTudo = document.getElementById('apaga-tudo');


function limparCapmo() {
  textoTarefa.value = '';
}

function adicionarTarefa() {
  if (textoTarefa.value !== '') {
    const novoItem = document.createElement('li');
    const novaTarefa = document.createElement('p');
    novoItem.classList.add('item-lista-tarefas');
    novaTarefa.classList.add('nova-tarefa');

    listaTarefas.appendChild(novoItem);
    novoItem.appendChild(novaTarefa);
    novaTarefa.innerHTML = textoTarefa.value;
    limparCapmo();
  }
}
criarTarefa.addEventListener('click', adicionarTarefa());

function removerTarefa() {
  if (listaTarefas.lastChild !== null) {
    const ultimoItem = listaTarefas.lastChild;
    listaTarefas.removeChild(ultimoItem);
  }
}

function limparCorDeFundo() {}

function alterarCorDeFundo() {
  console.log('Yes');
}
listaTarefas.addEventListener('click', alterarCorDeFundo());

function apagaTudo() {
  while (listaTarefas.firstChild) {
    listaTarefas.removeChild(listaTarefas.firstChild);
  }
}
limpaTudo.addEventListener('click', apagaTudo());


// console.log('Yes');
