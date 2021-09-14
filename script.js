const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const ol = document.querySelector('#lista-tarefas');


window.onload = () => {
  createElementLi();
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
    for (let i = 0; i < tarefa.length; i += 1) {
      if (tarefa[i].id === 'selected' || tarefa[i].id === ''){
        event.target.setAttribute('id', 'selected');
      }}
    }
  )
}

selectItem()