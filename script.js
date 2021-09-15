const criarTarefas = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const textoTarefas = document.getElementById('texto-tarefa');

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
