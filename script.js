// my codigs =)

function salvar() {
  const nodeDB = document.querySelector('ol');
  const localDB = nodeDB.innerHTML;
  localStorage.setItem('listDB', localDB);
}

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

function observers() {
  const bloco = document.querySelectorAll('li');
  bloco.forEach((add) => {
    add.addEventListener('click', selectTask);
    add.addEventListener('dblclick', taskComplet);
  });
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
  imputNode.value = ''; imputNode.focus();
  salvar();
}

function loadDB() {
  const localDB = localStorage.getItem('listDB');
  const node = document.querySelector('ol');
  node.innerHTML = localDB;
  observers();
}

const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', () => {
  const test = document.querySelector('#texto-tarefa');
  if (test === 'undefined') {
    return alert('Insira uma tarefa por gentileza!');
  }
  newTesc();
});

const btnClrAll = document.querySelector('#apaga-tudo');
btnClrAll.addEventListener('click', () => {
  const allLi = document.querySelector('ol');
  allLi.innerHTML = ''; salvar();
});

const btnClrSelected = document.querySelector('#remover-selecionado');
btnClrSelected.addEventListener('click', () => {
  const grup = document.querySelectorAll('li');
  grup.forEach((alvo) => { if (alvo.classList.contains('selected')) alvo.remove(); });
  salvar();
});

const btnClrDone = document.querySelector('#remover-finalizados');
btnClrDone.addEventListener('click', () => {
  const list = document.querySelectorAll('li');
  list.forEach((done) => { if (done.classList.contains('completed')) done.remove(); });
  salvar();
});

const btnSalve = document.querySelector('#salvar-tarefas');
btnSalve.addEventListener('click', salvar);

window.onload = () => loadDB();
