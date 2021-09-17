const taskButton = document.getElementById('criar-tarefa');
const taskList = document.getElementById('lista-tarefas');
const taskText = document.getElementById('texto-tarefa');
const clearAll = document.getElementById('apaga-tudo')

function addButtonTask () {
    const newItem = document.createElement('li');
    newItem.innerText = taskText.value;
    taskList.appendChild(newItem);
    taskText.value = '';
}
taskButton.addEventListener('click', addButtonTask);


taskList.addEventListener('click', function (event) {
    const itemTask = document.querySelectorAll('li');
    for (let index = 0; index < itemTask.length; index += 1) {
        itemTask[index].style.backgroundColor = '';
        itemTask[index].classList.remove('selected');
            event.target.style.backgroundColor = 'rgb(128, 128, 128)';
            event.target.classList.add('selected');
        }
    });

    taskList.addEventListener('dblclick', function (event) {
        const doubleClick = event.target;
      
        if (doubleClick.classList.contains('completed')) {
          doubleClick.classList.remove('completed')
        } else {
          doubleClick.classList.add('completed')
        }
      
    })

      clearAll.addEventListener('click', function () {
        taskList.innerText = '';
      })