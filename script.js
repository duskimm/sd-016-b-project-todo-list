console.log('vamo q vamo');
function createListItem() {
  const valorInput = document.getElementById('texto-tarefa');
  const orderedList = document.getElementById('lista-tarefas');
  const p = document.createElement('li');
  p.classList.add('lista');
  orderedList.appendChild(p).innerText = valorInput.value;
  valorInput.value = '';
}

const submitButton = document.getElementById('criar-tarefa');
submitButton.addEventListener('click', createListItem);

// mudando para cor cinza

function changeBackgroundColorToGray(Event) {
  Event.target.style.backgroundColor = 'red';
}

const getListelements = document.getElementById('lista-tarefas').children;
for (let index = 0; index < getListelements.length; index += 1) {
  getListelements[index].addEventListener('click', changeBackgroundColorToGray);
}
