const button = document.getElementById('criar-tarefa');
const lista = document.getElementById('lista-tarefas');

/// Mudar cor da tarefa selecionada

function mudarCor(event) {
  if (document.getElementById('selected') === null) {
    event.target.id = 'selected';
  } else {
    document.getElementById('selected').id = '';
    event.target.id = 'selected';
  }
}

/// Criar nova tarefa

function criarTarefa() {
  const inputTexto = document.getElementById('texto-tarefa').value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = inputTexto;
  document.getElementById('texto-tarefa').value = '';
  novaTarefa.addEventListener('click', mudarCor);
  lista.appendChild(novaTarefa);
}

button.addEventListener('click', criarTarefa);
