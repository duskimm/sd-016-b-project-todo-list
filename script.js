const addButton = document.getElementById('criar-tarefa');
const addListOl = document.getElementById('lista-tarefas');
const addInput = document.getElementById('texto-tarefa');
const addBackground = document.getElementsByTagName('li');
const deleteList = document.getElementById('apaga-tudo');
const removerFinalizados = document.getElementById('remover-finalizados');

addButton.addEventListener('click', () => {
  const createLi = document.createElement('li');
  createLi.className = 'itens';
  createLi.innerText = addInput.value;
  addListOl.appendChild(createLi);
  addInput.value = '';
});

addListOl.addEventListener('click', (event) => {
  const evento = event.target;
  for (let index = 0; index < addBackground.length; index += 1) {
    addBackground[index].style.backgroundColor = 'white';
  }
  evento.style.backgroundColor = 'rgb(128, 128, 128)';
});

addListOl.addEventListener('dblclick', (event) => {
  if (event.target.classList.contains('completed')) {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

deleteList.addEventListener('click', () => {
  const itens = document.querySelectorAll('.itens');// addListOl.innerHTML = '';
  for (let index = 0; index < itens.length; index += 1) {
    addListOl.removeChild(itens[index]);// itens[index].remove() + for.
  }
});

removerFinalizados.addEventListener('click', () => {
  const completed = document.querySelectorAll('.completed');
  for (let index = 0; index < completed.length; index += 1) {
    addListOl.removeChild(completed[index]);
  }
});
