const getInput = document.getElementById('texto-tarefa');
const getButton = document.getElementById('criar-tarefa');
const getOrderlist = document.getElementById('lista-tarefas');
const getItemList = document.getElementsByClassName('itemList');
const getDeleteButton = document.getElementById('apaga-tudo');
const getCompletedButton = document.getElementById('remover-finalizados');
let salvarLocalStorage = [];
let getChildNodes = getOrderlist.childNodes;
getButton.addEventListener('click', function () {
  const criali = document.createElement('li');
  criali.innerHTML = getInput.value;
  criali.className = 'itemList';
  getOrderlist.appendChild(criali);
  getInput.value = '';
});

getOrderlist.addEventListener('click', function(event) {
  removeSelecionado();
  for (let i = 0; i < getItemList.length; i += 1) {
    getItemList[i].style.backgroundColor = 'white';
  };
  event.target.style.backgroundColor = 'rgb(128, 128, 128)';
  event.target.classList.toggle('selecionado');
});

function removeSelecionado() {
  for (let i = 0; i < getItemList.length; i += 1){
    getItemList[i].classList.remove('selecionado');
  }
}

getOrderlist.addEventListener('dblclick', function(event) {
  // evento.style.textDecoration = 'line-through solid rgb(0, 0, 0)'
  event.target.classList.toggle('completed'); // toggle usado para add e remover a classe retirado do site https://www.w3schools.com/howto/howto_js_toggle_class.asp
});
// Botão apagar tudo
function deleteList(n) {
  for (let i = 0; i < n; i += 1) {
    getOrderlist.removeChild(getOrderlist.firstElementChild);
  }
};
getDeleteButton.addEventListener('click', function (){
deleteList(getItemList.length);
});
// apagar selecionados
getCompletedButton.addEventListener('click', function (){
  const getComplete = document.getElementsByClassName('completed');
  function retirar () {
    for (let i = getComplete.length -1; i >= 0; i -= 1){ // Retirado a ideia de fazer um loop inverso do site https://stackoverflow.com/questions/40114681/remove-all-elements-in-the-html-collection
      getComplete[i].remove();
    }
  }
  retirar();
});
// 12
const saveButton = document.querySelector('#salvar-tarefas');
if (localStorage.length >= 1){
  startPage();
  }
saveButton.addEventListener('click', function () {
  savelocal();
});

function startPage (){
  let iniciar = JSON.parse(localStorage.getItem('list'));
  for (let i = 0; i < iniciar.length; i += 1) {
    let criali = document.createElement('li');
    criali.innerHTML = iniciar[i].name;
    criali.className = iniciar[i].class;
    getOrderlist.appendChild(criali);
  }
}

function savelocal(){
  let nodechild = getOrderlist.childNodes;
  let save = [];
  for (let i = 0; i < nodechild.length; i +=1){
    let criaobj = {};
    criaobj.name = nodechild[i].innerHTML;
    criaobj.class = nodechild[i].className;
    save.push(criaobj);
  }
  salvarLocalStorage = save;
  localStorage.setItem('list', JSON.stringify(salvarLocalStorage));
}
// add no localStorage 1- transformar array em string depois em  objeto 2- salvar no local storage - 3 retirar do local storage - 4 converter string em objeto, converter objeto em array - add na list ;


// 13
// retirado o uso da função Array.prototype.slice.call do site https://stackoverflow.com/questions/11761881/javascript-dom-find-element-index-in-container
const getCima = document.querySelector('#mover-cima');

getCima.addEventListener('click', function() {
  let getSelecionado = document.querySelector('.selecionado');
  if (getSelecionado !== null){
    let next = getSelecionado.previousElementSibling;
    let atual = getSelecionado;
    if (atual !== getItemList[0]){
        getOrderlist.insertBefore(atual, next); // insere o elemento next antes do atual
    }
  }
});
const getBaixo = document.querySelector('#mover-baixo');

getBaixo.addEventListener('click', function() {
  let getSelecionado = document.querySelector('.selecionado');
  if (getSelecionado !== null){
  let next = getSelecionado.nextElementSibling;
  let atual = getSelecionado;
  let ultimoFilho = getOrderlist.lastElementChild;
  if (atual !== ultimoFilho){
    getOrderlist.insertBefore(next, atual); 
  }
  }
});

const getRemSelected = document.querySelector('#remover-selecionado');

// 14
getRemSelected.addEventListener('click', function () {
  let getSelecionado = document.querySelector('.selecionado');
  getSelecionado.remove();
});
