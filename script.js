// Utilities functions
function q(params) {
  return document.body.querySelector(params);
}
/*
function qAll(params) {
  return document.body.querySelectorAll(params);
}
*/
function appendToChild(element, tag, text, className) {
  const stuf = document.createElement(tag);
  stuf.innerText = text;
  element.appendChild(stuf).classList.add(className);
}

// Adicionando itens a lista
const criarTarefa = q('#criar-tarefa');
criarTarefa.addEventListener('click', () => {
  const ol = q('#lista-tarefas');
  const textoTarefa = q('#texto-tarefa');
  const valueOf = textoTarefa.value;
  appendToChild(ol, 'li', valueOf, 'tasks');
  textoTarefa.value = '';
});
