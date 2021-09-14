const addButton = document.getElementById('criar-tarefa');
const addListOl = document.getElementById('lista-tarefas');
const addInput = document.getElementById('texto-tarefa');
const addBackground = document.getElementsByTagName('li');
const deleteList = document.getElementById('apaga-tudo');

addButton.addEventListener('click', function() {
  const createLi = document.createElement('li');
  createLi.className = 'itens';
  createLi.innerText = addInput.value;
  addListOl.appendChild(createLi);
  addInput.value = "";
});

addListOl.addEventListener('click', function(event) {
  for (let index = 0; index < addBackground.length; index += 1) {
    addBackground[index].style.backgroundColor = 'white';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
});

addListOl.addEventListener('dblclick', function(event) {
  if (event.target.className === 'completed') {
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
});

deleteList.addEventListener('click', function() {
  const itens = document.querySelectorAll('.itens'); //addListOl.innerHTML = '';
  for (let index = 0; index < itens.length; index += 1) {
    addListOl.removeChild(itens[index]);
  }
});

