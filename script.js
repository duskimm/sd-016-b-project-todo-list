// my codigs =)
function salvar() {
  const nodeDB = document.querySelector('ol');
  const localDB = nodeDB.innerHTML;
  localStorage.setItem('listDB', localDB);
}
// selecionar tarefa
function selectTask(event) {
  const sell = document.querySelectorAll('li');
  sell.forEach((iten) => {
    if (iten.classList.contains('selected')) {
      iten.classList.remove('selected');
    }
  });
  event.target.classList.add('selected'); salvar();
}
// marcar concluido
function taskComplet(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
  salvar();
}
// adicionar observers para os itens da lista
function observers() {
  const bloco = document.querySelectorAll('li');
  bloco.forEach((add) => {
    add.addEventListener('click', selectTask);
    add.addEventListener('dblclick', taskComplet);
  });
}
// puxar base existente
function loadDB() {
  const localDB = localStorage.getItem('listDB');
  const node = document.querySelector('ol');
  node.innerHTML = localDB;
  observers();
}
// modal de alerta
// function alerta() {
//   const modl = document.querySelector('#modl-01');
//   modl.modal();
// }

// triar nova tarefa
function newTesc() {
  const imputNode = document.querySelector('#texto-tarefa');
  const location = document.querySelector('#lista-tarefas');
  if (imputNode.value.length < 1) {
    alert('Por gentileza digite algo no campo nova tarefa');
    return imputNode.focus();
  }
  const newTsc = document.createElement('li');
  newTsc.innerText = imputNode.value; newTsc.classList = 'fila';
  location.appendChild(newTsc);
  newTsc.addEventListener('click', selectTask);
  newTsc.addEventListener('dblclick', taskComplet);
  imputNode.value = ''; imputNode.focus();
  salvar();
}

const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', () => {
  const test = document.querySelector('#texto-tarefa');
  if (test === 'undefined') {
    return alert('Insira uma tarefa por gentileza!');
  }
  newTesc();
});
// botoes para apagar todas as tarefas
const btnClrAll = document.querySelector('#apaga-tudo');
btnClrAll.addEventListener('click', () => {
  const allLi = document.querySelector('ol');
  allLi.innerHTML = ''; salvar();
});
// apagar so selecionados
const btnClrSelected = document.querySelector('#remover-selecionado');
btnClrSelected.addEventListener('click', () => {
  const grup = document.querySelectorAll('li');
  grup.forEach((alvo) => { if (alvo.classList.contains('selected')) alvo.remove(); });
  salvar();
});
// apagar concluidos
const btnClrDone = document.querySelector('#remover-finalizados');
btnClrDone.addEventListener('click', () => {
  const list = document.querySelectorAll('li');
  list.forEach((done) => { if (done.classList.contains('completed')) done.remove(); });
  salvar();
});
// salva tarefas
const btnSalve = document.querySelector('#salvar-tarefas');
btnSalve.addEventListener('click', salvar);
// mover itens

// functions move
function movUp() {
  const list = document.querySelector('ol');
  const nodeIten = document.querySelector('.selected');
  if (nodeIten !== null) {
    const previlNode = nodeIten.previousElementSibling;
    if (previlNode !== null) {
      list.insertBefore(nodeIten, previlNode);
    }
  }
}
//  move down
function movDown() {
  const list = document.querySelector('ol');
  const nodeIten = document.querySelector('.selected');
  if (nodeIten !== null) {
    const previlNode = nodeIten.nextElementSibling;
    if (previlNode !== null) {
      list.insertBefore(previlNode, nodeIten);
    }
  }
}
// mover itens da lista
// move iten up
const btnUp = document.querySelector('#mover-cima');
btnUp.addEventListener('click', movUp);
// move iten down
const btnDown = document.querySelector('#mover-baixo');
btnDown.addEventListener('click', movDown);
// iniciar com base caso ja tenha
window.onload = () => loadDB();
