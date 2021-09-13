function newTesc() {
  const imputNode = document.querySelector('#texto-tarefa');
  const location = document.querySelector('#lista-tarefas');
  const newTsc = document.createElement('li');
  newTsc.innerText = imputNode.value;
  location.appendChild(newTsc);
  imputNode.value = '';
}

function inputTest() {
  const test = document.querySelector('#texto-tarefa');
  if (test === '') {
    return alert('Insira uma tarefa por gentileza!');
  }
  newTesc();
}

const btnCriar = document.querySelector('#criar-tarefa');
btnCriar.addEventListener('click', newTesc);
