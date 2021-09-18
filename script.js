function pintaTarefa(event) {
  const eventTarget = event.target;
  eventTarget.style.backgroundColor = ' rgb(128, 128, 128)';
}
// requisito 7: referência: https://www.w3schools.com/howto/howto_js_todolist.asp;

const criarTarefa = (evento) => {
  evento.preventDefault(); // previne o comportamento padrão
  const lista = document.querySelector('#lista-tarefas');
  const tarefas = document.querySelector('#texto-tarefa');
  const valor = tarefas.value;
  const addTarefa = document.createElement('li');
  const conteudo = `${valor}`; // pega o valor do javascript
  lista.addEventListener('click', pintaTarefa);
  addTarefa.className = 'tarefaAdd';
  addTarefa.innerHTML = conteudo;

  lista.appendChild(addTarefa);

  tarefas.value = ''; // limpa o valor do input
};

function addTarefaClick() {
  const button = document.querySelector('#criar-tarefa');
  button.addEventListener('click', criarTarefa);
}
addTarefaClick();

// Requisitos 5 e 6 desenvolvidos com a video aula do curso da Alura : 'Manipule o Dom com  JS';
