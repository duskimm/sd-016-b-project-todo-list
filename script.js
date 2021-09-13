/// Criar nova tarefa

const button = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

function mudarCor(event) {
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}

function criarTarefa() {
  const inputTexto = document.getElementById('texto-tarefa').value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = inputTexto;
  document.getElementById('texto-tarefa').value = '';
  novaTarefa.addEventListener('click', mudarCor);
  lista.appendChild(novaTarefa);
}

button.addEventListener('click', criarTarefa);
