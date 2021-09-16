const criarTarefas = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefas = document.getElementById('texto-tarefa');
const apagaTarefas = document.getElementById('apaga-tudo');
// const moverCima = document.getElementById('mover-cima');
// const moverBaixo = document.getElementById('mover-baixo');
// const remover = document.getElementById('remover-finalizados');

criarTarefas.addEventListener('click', () => {
  const itemLista = document.createElement('li');
  const text = textoTarefas.value;
  itemLista.innerText = text;
  if (textoTarefas.value === '') {
    alert('Campo vazio: Adicione uma tarefa!');
  } else {
    listaTarefas.appendChild(itemLista);
    itemLista.classList = 'item';
  }
  textoTarefas.value = '';
});

apagaTarefas.addEventListener('click', () => {
  listaTarefas.innerHTML = '';
});

// Ref.: https://www.w3schools.com/howto/howto_js_todolist.asp
listaTarefas.addEventListener('dblclick', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('completed');
  }
}, false);

listaTarefas.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('select');
  }
}, false);
