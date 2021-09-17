/* Adicionando cor nos itens da lista */
function addColor(event) {
  if (document.querySelector('.colorindo') !== null) {
    const elemento = document.querySelector('.colorindo');
    elemento.classList.remove('colorindo');
  }
  const aux = event.target;
  aux.classList.add('colorindo');
}

/* Riscando os itens da lista */
function itemScratched(event) {
  const liRiscado = event.target;
  if (liRiscado.classList.contains('completed')) {
    liRiscado.classList.remove('completed');
  } else {
    liRiscado.classList.add('completed');
  }
}

/* Adicionando item a lista */
function addItemList() {
  const listOrdem = document.getElementById('lista-tarefas');
  const texto = document.getElementById('texto-tarefa');
  const newItem = document.createElement('li');
  newItem.addEventListener('click', addColor);
  newItem.addEventListener('dblclick', itemScratched);
  listOrdem.appendChild(newItem);
  newItem.innerText = texto.value;
  texto.value = '';
}

/* Apagando os itens da lista */
function deletItemList() {
  const lis = document.querySelectorAll('li');
  console.log(lis);
  for (let index = 0; index < lis.length; index += 1) {
    lis[index].remove();
  }
}

/* Apaga os itens finalizados */
function deletItensFilizados() {
  const lisFinalizados = document.querySelectorAll('li.completed');
  for (let index = 0; index < lisFinalizados.length; index += 1) {
    lisFinalizados[index].remove();
  }
}

/* Botão criar itens na lista */
const buttonCreat = document.getElementById('criar-tarefa');
buttonCreat.addEventListener('click', addItemList);

/* Botão que apaga todos os itens da lista */
const buttonDelet = document.getElementById('apaga-tudo');
buttonDelet.addEventListener('click', deletItemList);

/* Botão que apaga os itens finalizados */
const buttonFinalizados = document.getElementById('remover-finalizados');
buttonFinalizados.addEventListener('click', deletItensFilizados);
