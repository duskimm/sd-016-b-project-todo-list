function alterarCorDeFundoDaLi(event) {
  const tarefa = event.target;
  const li = document.querySelectorAll('li');
  for (let index = 0; index < li.length; index += 1) {
    li[index].style.backgroundColor = 'white';
  }
  tarefa.style.backgroundColor = 'rgb(128, 128, 128)';
}

function riscarTarefa(event) {
  const tarefa = event.target;
  if (tarefa.classList.contains('completed')) {
    tarefa.classList.remove('completed');
  } else {
    tarefa.classList.add('completed');
  }
}


function criarNovaTarefa() {
  const criarTarefa = document.getElementById('criar-tarefa');
  criarTarefa.addEventListener('click', function () {
    const textoTarefa = document.getElementById('texto-tarefa');

    const itemDaLista = document.createElement('li');
    itemDaLista.addEventListener('click', alterarCorDeFundoDaLi);
    itemDaLista.addEventListener('dblclick', riscarTarefa);

    const listaTarefas = document.getElementById('lista-tarefas');
    itemDaLista.innerHTML = textoTarefa.value; 
    textoTarefa.value = '';
    listaTarefas.appendChild(itemDaLista);
  });
}
criarNovaTarefa();

const apagaTudo = document.getElementById('apaga-tudo');
apagaTudo.addEventListener('click', apagarTodasTarefas);

function apagarTodasTarefas() {
  const listaTarefas = document.getElementById('lista-tarefas');
  listaTarefas.innerHTML = ''; 
}


