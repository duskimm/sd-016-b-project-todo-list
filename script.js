function addtask() {
  const createTask = document.getElementById('texto-tarefa').value;
  let list = document.getElementById('lista-tarefas').innerHTML;

  list += '<li>' + createTask + '</li>';
  document.getElementById('lista-tarefas').innerHTML = list;
  document.getElementById('texto-tarefa').value = null;
}

//indicação para tirar ideia do video: https://www.youtube.com/watch?v=pRwxgtqImZQ

const toGray = document.getElementById('lista-tarefas');
function changeColor(event) {
  const selectedItem = document.querySelectorAll('li');
  for (let index = 0; index < selectedItem.length; index += 1) {
    selectedItem[index].style.backgroundColor = '';
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
toGray.addEventListener('click', changeColor);
