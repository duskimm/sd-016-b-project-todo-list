window.onload = function () {
}

function header() {
  const headerTitle = document.getElementById('header-container');
  const headerH1 = document.createElement('h1');
  headerH1.innerText ='Minha Lista de Tarefas';
  headerTitle.appendChild(headerH1);
}
header();
