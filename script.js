const inputArea = document.getElementById('input-area');

function inputTarefa () {
  const input = document.createElement('input');
  input.id = 'texto-tarefa';
  input.type = 'text';
  input.placeholder = 'Adicione sua nova tarefa';
  inputArea.appendChild(input);

}
inputTarefa();
