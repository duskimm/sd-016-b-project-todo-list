// my codigs =)

function selectTask(event) {
  const sell = document.querySelectorAll('li');
  sell.forEach((iten) => {
    if (iten.classList.contains('selected')) {
      iten.classList.remove('selected');
    }
  });
    event.target.classList.add('selected');
}

function clearSelected() {
  const grup = document.querySelectorAll('li');
  grup.forEach((alvo) => { if (alvo.classList.contains('selected')) alvo.remove(); });
}

function clearAll() {
  const allLi = document.querySelector('ol');
  allLi.innerHTML = '';
}

function clearDones() {
  const list = document.querySelectorAll('li');
  list.forEach((done) => { if (done.classList.contains('completed')) done.remove(); });
}

function taskComplet(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}

function newTesc() {
  const imputNode = document.querySelector('#texto-tarefa');
  const location = document.querySelector('#lista-tarefas');
  if (imputNode.value.length < 1) {
    alert('Por gentileza digite algo no campo nova tarefa');
    return imputNode.focus();
  }
  const newTsc = document.createElement('li');
  newTsc.innerText = imputNode.value;
  location.appendChild(newTsc);
  newTsc.addEventListener('click', selectTask);
  newTsc.addEventListener('dblclick', taskComplet);
  imputNode.value = '';
}

function inputTest() {
  const test = document.querySelector('#texto-tarefa');
  if (test === 'undefined') {
    return alert('Insira uma tarefa por gentileza!');
  }
  newTesc();
}

function salvar() {
  const nodeDB = document.querySelector('ol');
  const localDB = nodeDB;
  localStorage.setItem('listDB', localDB);
  console.log(nodeDB);
}

function loadDB() {
  const localDB = localStorage.getItem(loadDB);
  const node = document.querySelector('ol');
  node.innerHTML = localDB;
}

const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', inputTest);

const btnClrAll = document.querySelector('#apaga-tudo');
btnClrAll.addEventListener('click', clearAll);

const btnClrSelected = document.querySelector('#remover-selecionado');
btnClrSelected.addEventListener('click', clearSelected);

const btnClrDone = document.querySelector('#remover-finalizados');
btnClrDone.addEventListener('click', clearDones);

const btnSalve = document.querySelector('#salvar-tarefas');
btnSalve.addEventListener('click', salvar);

window.onload = () => loadDB();
