// Utilities functions
function q(params) {
  return document.body.querySelector(params);
}

function qAll(params) {
  return document.body.querySelectorAll(params);
}

function appendToChild(element, tag, text, className) {
  const stuf = document.createElement(tag);
  stuf.innerText = text;
  element.appendChild(stuf).classList.add(className);
}

// variáveis e constantes
const criarTarefa = q('#criar-tarefa');
const ol = q('#lista-tarefas');
const textoTarefa = q('#texto-tarefa');
const apagaTudo = q('#apaga-tudo');
const apagaTerminados = q('#remover-finalizados');
const salvarTarefas = q('#salvar-tarefas');
const moverCima = q('#mover-cima');
const moverBaixo = q('#mover-baixo');
const rgbSelected = 'rgb(128, 128, 128)';
const removerSelecionado = q('#remover-selecionado');
const btnColors = ['#8ECAE6', '#219EBC', '#023047', '#FFB703', '#FB8500', '#480ca8'];

// reseta as cores
function resetColor() {
  const li = qAll('.tasks');
  for (let i = 0; i < li.length; i += 1) {
    li[i].style.backgroundColor = 'rgb(229 , 229 , 229)';
  }
}

// adiciona classe completed ao clicar
function isCompleted(event) {
  const classe = event.target.className;
  const element = event.target;
  if (classe === 'tasks') {
    element.className += ' completed';
  } else {
    element.className = 'tasks';
  }
}

// Ao clicar em um item muda sua cor de fundo
function changeItemColor() {
  const li = qAll('li');
  for (let i = 0; i < li.length; i += 1) {
    li[i].addEventListener('click', () => {
      resetColor();
      li[i].style.backgroundColor = rgbSelected;
    });
    li[i].addEventListener('dblclick', isCompleted);
  }
}

// Adicionando itens a lista
criarTarefa.addEventListener('click', () => {
  const valueOf = textoTarefa.value;
  appendToChild(ol, 'li', valueOf, 'tasks');
  textoTarefa.value = '';
  changeItemColor();
});

// Limpa toda a lista
apagaTudo.addEventListener('click', () => {
  while (ol.lastChild) {
    ol.removeChild(ol.lastChild);
  }
});

// Limpa somente terminados
apagaTerminados.addEventListener('click', () => {
  const finished = qAll('.completed');
  if (finished.length !== 0) {
    for (let i = 0; i < finished.length; i += 1) {
      finished[i].remove();
    }
  }
});

// Salvando no Local Storage
salvarTarefas.addEventListener('click', () => {
  const content = `${ol.innerHTML}`;
  localStorage.setItem('list', content);
  // referencia para aplicar uma lista de itens no LocalStorage: https://stackoverflow.com/questions/25712602/storing-lists-in-localstorage
});

// onload
window.onload = () => {
  const content = localStorage.getItem('list');
  ol.innerHTML = content;
  changeItemColor();
};

// Mover pra cima function

moverCima.addEventListener('click', () => {
  const li = qAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === rgbSelected && i > 0) {
      ol.insertBefore(li[i], li[i - 1]);
    }
  }
});

moverBaixo.addEventListener('click', () => {
  const li = qAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === rgbSelected && i < li.length - 1) {
      ol.insertBefore(li[i], li[i + 2]);
    }
  }
});

// remove somente selecionado
removerSelecionado.addEventListener('click', () => {
  const li = qAll('li');
  for (let i = 0; i < li.length; i += 1) {
    if (li[i].style.backgroundColor === rgbSelected) {
      li[i].parentNode.removeChild(li[i]);
    }
  }
});

// Add coros nos btns
const btns = qAll('main > button');
for (let i = 0; i < btns.length; i += 1) {
  btns[i].style.backgroundColor = btnColors[i];
}
