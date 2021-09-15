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

// variáveis e constantes
const criarTarefa = q('#criar-tarefa');
const ol = q('#lista-tarefas');
const textoTarefa = q('#texto-tarefa');

// Ao clicar em um item muda sua cor de fundo
function changeItemColor() {
  const li = ol.lastChild;
  li.addEventListener('click', () => {
    li.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}

// Adicionando itens a lista
criarTarefa.addEventListener('click', () => {
  const valueOf = textoTarefa.value;
  appendToChild(ol, 'li', valueOf, 'tasks');
  textoTarefa.value = '';
  changeItemColor();
});
