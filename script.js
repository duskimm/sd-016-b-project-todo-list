const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');


window.onload = () => {
  createElementLi();
  selectItem();
};

function createElementLi() {
  button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.innerText = input.value;
    li.className = 'tarefa';
    ol.appendChild(li);
    input.value = '';
})
}

function selectItem() {
  ol.addEventListener('click', (event) => {
    const tarefa = document.querySelectorAll('.tarefa');
      for(const element of tarefa) {
        if(element.classList.contains('selected')) {
          element.classList.remove('selected')
        } else {
          if(element === event.target) {
            element.classList.add('selected')
          }
        }
      }
      }
  )
}

