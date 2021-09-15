const listaTarefa = document.querySelector('#lista-tarefas');
const bgGraySelector = document.getElementsByClassName('bgCinza');
const btnCriarTarefa = document.querySelector('#criar-tarefa');
const btnReset = document.querySelector('#apaga-tudo');
const olLi2 = document.querySelector('.div_lista-tarefas');
const btnRemoveCom = document.querySelector('#remover-finalizados');
const btnSaveTasks = document.querySelector('#salvar-tarefas');
const btnMoveUp = document.querySelector('#mover-cima');
const btnMoveDown = document.querySelector('#mover-baixo');
const corPadrao = 'rgb(230, 228, 219)';
const corCinza = 'rgb(128, 128, 128';
const btnRemoveTask = document.querySelector('#remover-selecionado');

function criarTarefa() {
  const inputText = document.querySelector('#texto-tarefa').value;
  const newLi = document.createElement('li');
  newLi.innerText = inputText;
  listaTarefa.appendChild(newLi);
  document.querySelector('#texto-tarefa').value = '';
}

function completedClass(evento) {
  const eventoTarget = evento.target;
  if (eventoTarget.classList.contains('completed')) {
    eventoTarget.classList.remove('completed');
  } else {
    eventoTarget.classList.add('completed');
  }
}

function fundoCinza() {
  const liSelect = document.getElementsByTagName('li');
  for (let i = 0; i < liSelect.length; i += 1) {
    if (liSelect[i].classList.contains('bgCinza')) {
      liSelect[i].style.backgroundColor = corCinza;
    } else {
      liSelect[i].style.backgroundColor = corPadrao;
    }
  }
}

function grayBgTest() {
  const liSelect = document.getElementsByTagName('li');
  if (liSelect) {
    fundoCinza();
  }
}

function bgGray(event) {
  const eventTarget = event.target;
  if (eventTarget !== listaTarefa) {
    if (bgGraySelector.length > 0) {
      bgGraySelector[0].style.backgroundColor = 'rgb(230, 228, 219)';
      bgGraySelector[0].classList.remove('bgCinza');
      eventTarget.classList.add('bgCinza');
      grayBgTest();
    } else {
      eventTarget.classList.add('bgCinza');
      grayBgTest();
    }
  }
}

function resetAll() {
  listaTarefa.innerText = '';
}

function removeCompleted() {
  const selCompletedClass = document.getElementsByClassName('completed');
  const lastSelComp = selCompletedClass.length - 1;
  for (let i = lastSelComp; i >= 0; i -= 1) {
    selCompletedClass[i].remove();
  }
}

function saveTasks() {
  localStorage.clear();
  const elemTagLi = document.getElementsByTagName('li');
  const finalLi = elemTagLi.length;
  let listaLi = {};
  for (let i = 0; i < finalLi; i += 1) {
    let classLi = '';
    const elemIter = elemTagLi[i];
    const strEle = elemIter.innerText;
    const clSel = elemIter.classList.contains('completed');
    if (clSel) {
      classLi = 'completed';
    }
    listaLi = { str: strEle, classs: classLi };
    localStorage.setItem(`li${i}`, JSON.stringify(listaLi));
  }
}

function setInicial() {
  const localSIze = localStorage.length;
  for (let i = 0; i < localSIze; i += 1) {
    const actSelec = JSON.parse(localStorage.getItem(`li${i}`));
    const newLi2 = document.createElement('li');
    newLi2.innerText = actSelec.str;
    if (actSelec.classs) {
      newLi2.className = actSelec.classs;
    }
    listaTarefa.appendChild(newLi2);
  }
}

function moveElemUp() {
  if (bgGraySelector.length === 0) {
    return;
  }
  const previousLi = bgGraySelector[0].previousSibling;
  if (previousLi) {
    const actCls = bgGraySelector[0].classList.value;
    const prevCls = previousLi.classList.value;
    const actStr = bgGraySelector[0].innerText;
    const prevStr = previousLi.innerText;
    bgGraySelector[0].innerText = prevStr;
    bgGraySelector[0].className = prevCls;
    previousLi.className = actCls;
    previousLi.innerText = actStr;
    grayBgTest();
  }
}

function moveElemDown() {
  if (bgGraySelector.length === 0) {
    return;
  }
  const nextLi = bgGraySelector[0].nextSibling;
  if (nextLi) {
    const actCls = bgGraySelector[0].classList.value;
    const nxtCls = nextLi.classList.value;
    const actStr = bgGraySelector[0].innerText;
    const nxtStr = nextLi.innerText;
    bgGraySelector[0].innerText = nxtStr;
    bgGraySelector[0].className = nxtCls;
    nextLi.className = actCls;
    nextLi.innerText = actStr;
    grayBgTest();
  }
}

function deleteTask() {
  if (bgGraySelector.length === 0) {
    return;
  }
  bgGraySelector[0].remove();
}

window.onload = setInicial;
btnCriarTarefa.addEventListener('click', criarTarefa);
listaTarefa.addEventListener('click', bgGray);
olLi2.addEventListener('dblclick', completedClass);
btnReset.addEventListener('click', resetAll);
btnRemoveCom.addEventListener('click', removeCompleted);
btnSaveTasks.addEventListener('click', saveTasks);
btnMoveUp.addEventListener('click', moveElemUp);
btnMoveDown.addEventListener('click', moveElemDown);
btnRemoveTask.addEventListener('click', deleteTask);
