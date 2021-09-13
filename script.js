function criarTarefa() {
  const inputText = document.querySelector('#texto-tarefa').value;
  const listaTarefa = document.querySelector('#lista-tarefas');
  const newLi = document.createElement('li');
  newLi.innerText = inputText;
  listaTarefa.appendChild(newLi);
  document.querySelector('#texto-tarefa').value = '';
}

const btnCriarTarefa = document.querySelector('#criar-tarefa');
btnCriarTarefa.addEventListener('click', criarTarefa);
