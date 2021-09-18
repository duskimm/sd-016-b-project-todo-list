function pintaTarefa(event) {
  const eventTarget = event.target;
  const tarefaPintada = document.querySelectorAll('.tarefaAdd');

  for (let i = 0; i < tarefaPintada.length; i += 1) {
    if (tarefaPintada[i].classList.contains('tarefaPintada')) {
      tarefaPintada[i].classList.remove('tarefaPintada');
    }
  }
  eventTarget.classList.add('tarefaPintada');
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
