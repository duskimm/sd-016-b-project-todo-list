// cmds

function selectTask(event) {
  const selecao = document.querySelectorAll('li');
  for (let lis = 0; lis < selecao.length; lis += 1) {
    const clear = selecao[lis];
    if (clear.classList.contains('selected')) {
      clear.classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
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

const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', inputTest);
