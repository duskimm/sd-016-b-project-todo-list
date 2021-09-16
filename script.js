/* Adicionando item a lista */
function addItemList() {
  const listOrdem = document.getElementById('lista-tarefas');
  const texto = document.getElementById('texto-tarefa');
  const newItem = document.createElement('li');
  /* Adicionando cor nos itens da lista */
  newItem.addEventListener('click', (event) => {
    const aux = event;
    aux.target.style.backgroundColor = 'rgb(128, 128, 128)';
    console.log(event.target);
  });
  listOrdem.appendChild(newItem);
  newItem.innerText = texto.value;
  texto.value = '';
}

const button = document.getElementById('criar-tarefa');
button.addEventListener('click', addItemList);
