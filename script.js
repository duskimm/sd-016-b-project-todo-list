const button1 = document.getElementById('criar-tarefa');
const button2 = document.getElementById('apaga-tudo');
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

/// Riscar e desriscar tarefa completa

function tarefaCompleta(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.className = 'completed';
  }
}

/// Criar nova tarefa e adicionar event listeners

function criarTarefa() {
  const inputTexto = document.getElementById('texto-tarefa').value;
  const novaTarefa = document.createElement('li');
  novaTarefa.innerText = inputTexto;
  document.getElementById('texto-tarefa').value = '';
  novaTarefa.addEventListener('click', mudarCor);
  novaTarefa.addEventListener('dblclick', tarefaCompleta);
  lista.appendChild(novaTarefa);
}

button1.addEventListener('click', criarTarefa);

/// Apagar todas tarefas
function apagarTarefas() {
  for (let i = lista.children.length; i > 0; i -= 1) {
    const ultimaTarefa = lista.lastChild;
    lista.removeChild(ultimaTarefa);
  }
}

button2.addEventListener('click', apagarTarefas);
