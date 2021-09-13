const getInput = document.getElementById('texto-tarefa');
const getButton = document.getElementById('criar-tarefa');
const getOrderlist = document.getElementById('lista-tarefas');

// Adicinar valores a lista 
getButton.addEventListener('click', function () {
  const criali = document.createElement('li');
  criali.innerHTML = getInput.value;
  criali.className = 'itemList';
  getOrderlist.appendChild(criali);
  getInput.value = '';
});

getOrderlist.addEventListener('click', function(event){
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
    });
