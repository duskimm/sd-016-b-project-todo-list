const inputArea = document.getElementById('input-area');
const listaArea = document.getElementById('lista-area');

function createInputTarefa () {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Adicione sua nova tarefa';
  inputArea.appendChild(input);

}
createInputTarefa();

function createListOrdenada () {
  const olList = document.createElement('ol');
  olList.id = 'lista-tarefas';
  listaArea.appendChild(olList);
}
createListOrdenada();