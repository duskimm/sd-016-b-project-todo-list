// cmds

function selectTask(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  }
  event.target.classList.add('completed');
}

function taskComplet() {
  console.log('Click dublo marca como completo!');
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
