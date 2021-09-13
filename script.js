function addtask() {
  const createTask = document.getElementById('texto-tarefa').value;
  let list = document.getElementById('lista-tarefas').innerHTML;

  list += '<li>' + createTask + '</li>';
  document.getElementById('lista-tarefas').innerHTML = list;
  document.getElementById('texto-tarefa').value = null;
}
//indicação para tirar ideia do video: https://www.youtube.com/watch?v=pRwxgtqImZQ