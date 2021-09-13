// Variaveis Globais
const divInput = document.querySelector('#inputlist');
// 1
function creatInput() {
  const input = document.createElement('input');
  input.type = 'text';
  input.id = 'texto-tarefa';
  divInput.appendChild(input);
}
creatInput();
