function addItemList() {
  const localizaOl = document.getElementById('lista-tarefas');
  const localizaButton = document.getElementById('criar-tarefa');

  localizaButton.addEventListener('click', () => {
    const criaLi = document.createElement('li');
    const localizaInput = document.getElementById('texto-tarefa');
    criaLi.innerText = localizaInput.value;
    criaLi.className = 'list';
    localizaOl.appendChild(criaLi);
    localizaInput.value = '';
  });
}
addItemList();

function removeColor() {
  const removeBackGroundColor = document.querySelectorAll('.list');

  for (let index = 0; index < removeBackGroundColor.length; index += 1) {
    if (removeBackGroundColor[index].classList.contains('selected')) {
      removeBackGroundColor[index].classList.remove('selected');
      removeBackGroundColor[index].style.backgroundColor = '';
    }
  }
}

function altCor() {
  const addColor = document.querySelectorAll('ol');

  for (let index = 0; index < addColor.length; index += 1) {
    addColor[index].addEventListener('click', (event) => {
      removeColor();
      const evento = event.target;
      evento.classList.add('selected');
      evento.style.backgroundColor = 'rgb(128, 128, 128)';
    });
  }
}
altCor();

function doubleClick() {
  const localizaOl = document.querySelectorAll('ol');

  for (let index = 0; index < localizaOl.length; index += 1) {
    localizaOl[index].addEventListener('dblclick', (event) => {
      if (event.target.classList.contains('completed')) {
        event.target.classList.remove('completed');
      } else {
        event.target.classList.add('completed');
      }
    });
  }
}
doubleClick();
