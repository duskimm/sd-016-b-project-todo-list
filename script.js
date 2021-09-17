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

/* Input */
const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addItemList);
