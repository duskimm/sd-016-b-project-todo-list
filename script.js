const listaTarefa = document.querySelector('#lista-tarefas');
const bgGraySelector = document.getElementsByClassName('bgCinza');

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

function bgGray(event) {
  const eventTarget = event.target;
  if (eventTarget !== listaTarefa) {
    if (bgGraySelector.length > 0) {
      bgGraySelector[0].style.backgroundColor = 'rgb(230, 228, 219)';
      bgGraySelector[0].classList.remove('bgCinza');
      eventTarget.classList.add('bgCinza');
      bgGraySelector[0].style.backgroundColor = 'rgb(128, 128, 128';
    } else {
      eventTarget.classList.add('bgCinza');
      bgGraySelector[0].style.backgroundColor = 'rgb(128, 128, 128';
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

const btnCriarTarefa = document.querySelector('#criar-tarefa');
btnCriarTarefa.addEventListener('click', criarTarefa);
const btnReset = document.querySelector('#apaga-tudo');
listaTarefa.addEventListener('click', bgGray);
const olLi2 = document.querySelector('.div_lista-tarefas');
olLi2.addEventListener('dblclick', completedClass);
btnReset.addEventListener('click', resetAll);
const btnRemoveCom = document.querySelector('#remover-finalizados');
btnRemoveCom.addEventListener('click', removeCompleted);
const btnSaveTasks = document.querySelector('#salvar-tarefas');
btnSaveTasks.addEventListener('click', saveTasks);
window.onload = setInicial;
