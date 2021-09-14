const criarTarefa = (evento) => {
  evento.preventDefault(); // previne o comportamento padrão
  const lista = document.querySelector('#lista-tarefas');
  const tarefas = document.querySelector('#texto-tarefa');
  const valor = tarefas.value;
  const addTarefa = document.createElement('li');
  const conteudo = `${valor}`;

  addTarefa.innerHTML = conteudo;

  lista.appendChild(addTarefa);

  tarefas.value = ''; // limpa o valor do input
};

const button = document.querySelector('#criar-tarefa');
button.addEventListener('click', criarTarefa);
