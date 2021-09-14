const botaoCriarTarefa = document.getElementById('criar-tarefa');
const listaTarefas = document.getElementById('lista-tarefas');
const itemTarefa = document.getElementsByClassName('itemTarefa');

botaoCriarTarefa.onclick = function () {
  const lista = document.getElementById('lista-tarefas');
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'itemTarefa';
  const textoInput = document.getElementById('texto-tarefa').value;
  novaTarefa.innerText = textoInput;
  lista.appendChild(novaTarefa);
  document.getElementById('texto-tarefa').value = '';
};

listaTarefas.addEventListener('click', changeBG);

function changeBG(event) {
  for (let i = 0; i < itemTarefa.length; i += 1) {
    itemTarefa[i].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
// créditos ao pessoal da thread do slack

listaTarefas.addEventListener('dblclick', riskitem);

function riskitem(event) {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
    event.target.style.textDecoration = '';
  } else {
    event.target.classList.add('completed');
    const risked = document.querySelectorAll('.completed');
    for (let i = 0; i < risked.length; i += 1) {
      risked[i].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
}
