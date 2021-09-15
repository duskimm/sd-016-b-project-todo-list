const criarTarefa = document.getElementById('criar-tarefa');
const textoTarefa = document.getElementById('texto-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');

function limparCapmo() {
  textoTarefa.value = "";
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
// Para remover todos os filhos de um elemento:

// let element = document.getElementById("top");
// while (element.firstChild) {
//   element.removeChild(element.firstChild);
// }

// Agora o segredo é você adicionar no campo input text que você quer fazer o efeito a seguinte propriedade e valor:

//  onfocus="this.value='';"
