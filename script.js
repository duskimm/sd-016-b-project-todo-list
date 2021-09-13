/// Criar nova tarefa

const button = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

function criarTarefa() {
  const inputTexto = document.getElementById('texto-tarefa').value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = inputTexto;
  document.getElementById('texto-tarefa').value = '';
  lista.appendChild(novaTarefa);
}

button.addEventListener('click', criarTarefa);
