function addtask() {
  const createTask = document.getElementById('texto-tarefa').value;
  let list = document.getElementById('lista-tarefas').innerHTML;

  list += '<li>' + createTask + '</li>';
  document.getElementById('lista-tarefas').innerHTML = list;
  document.getElementById('texto-tarefa').value = null;
}

//indicação para tirar ideia do video: https://www.youtube.com/watch?v=pRwxgtqImZQ

const selectedItem = document.querySelectorAll('li')
const toGray = document.getElementById('lista-tarefas');
const clearitens = document.getElementById('apaga-tudo');


function changeColor(event) {
  for (let index = 0; index < selectedItem.length; index += 1) {
    selectedItem[index].style.backgroundColor = ""
  }
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
}
toGray.addEventListener('click', changeColor);



function lineThrough(event) {
  if (event.target.className === "completed") {
    event.target.className = ""
  } else {
    event.target.className = "completed"
  }
}
toGray.addEventListener("dblclick", lineThrough);


function removeAll() {
  let deleteAll = document.querySelectorAll('li')
  if (deleteAll.length > 0) {
    for (index = 0; index < deleteAll.length; index += 1) {
      deleteAll[index].remove();
    }
  }
}
clearitens.addEventListener('click', removeAll);