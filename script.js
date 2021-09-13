const addButton = document.getElementById('criar-tarefa');
const addListOl = document.getElementById('lista-tarefas');
const addInput = document.getElementById('texto-tarefa');
const addBackground = document.getElementsByTagName('li');

addButton.addEventListener('click', function() {
  const createLi = document.createElement('li');
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


