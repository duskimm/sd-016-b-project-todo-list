// console.log(document.querySelector('button'))

function addTarefa() {
  if (document.querySelector('#texto-tarefa').value.length > 0) {
    // console.log(document.querySelector('#texto-tarefa').value);
    let li = document.createElement('li');
    li.innerText = document.querySelector('#texto-tarefa').value;
    li.onclick = selecionar;
    document.querySelector('#lista-tarefas').appendChild(li);
  }
}

//  Habilita seleção
function selecionar(e) {
  if (document.querySelector('.selecionado')) {
    document.querySelector('.selecionado').classList.remove('selecionado');
  }
  e.target.classList.add('selecionado');
}

//  Configurar a página
function configurar() {
  document.querySelector('#criar-tarefa').addEventListener('click', addTarefa);
}

window.onload = configurar;

// Linter, você está feliz?
