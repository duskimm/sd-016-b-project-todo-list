const listaOrdenada = document.getElementById('lista-tarefas');
const textoTarefa = document.getElementById('texto-tarefa');
const btnCriaTarefa = document.getElementById('criar-tarefa');

function getTextoTarefa() {
  const novaTarefa = textoTarefa.value;
  // console.log(novaTarefa);
  return novaTarefa;
}

textoTarefa.addEventListener('change', getTextoTarefa);

function adicionaTarefa() {
  const criaLinha = document.createElement('li');
  criaLinha.innerText = getTextoTarefa();
  listaOrdenada.appendChild(criaLinha);
  textoTarefa.value = '';
}

btnCriaTarefa.addEventListener('click', adicionaTarefa);
