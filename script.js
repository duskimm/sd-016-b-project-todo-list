const toDoSend = document.querySelector('#criar-tarefa');
const appendList = document.querySelector('#lista-tarefas');
const getToDoValue = document.querySelector('#texto-tarefa');

function toDoCreation() {
  let createElementList = document.createElement('li');
  createElementList.innerHTML = getToDoValue.value;
  createElementList.classList = 'task';
  appendList.appendChild(createElementList);
  getToDoValue.value = '';
}
toDoSend.addEventListener('click', toDoCreation);

function backgroundToDoList() {
  // for (const color of taskColor) {
    //   color.addEventListener('click', (event) => {
      //     let fullColor = color.style.backgroundColor;
      //     if (fullColor !== 'rgb(194, 194, 194)') {
        //       fullColor.style.backgroundColor = 'rgb(194, 194, 194)';
        //     }
        //     event.target.style.backgroundColor = 'rgb(128, 128, 128)';
        //   });

  appendList.addEventListener('click', (e) => {
    const taskColor = document.querySelectorAll('li');
          console.log(taskColor);
    for (let index = 0; index < taskColor.length; index += 1) {
      taskColor[index].style.backgroundColor = 'rgb(194, 194, 194)';
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
  });
}
backgroundToDoList();
