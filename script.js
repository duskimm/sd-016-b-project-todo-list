//  Adiciona tarefa e limpa input (requisitos 5 e 6)  //
const input = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');
const clear = document.getElementById('apaga-tudo');

function adicionar(){
  if(input.value !== ''){
  let lista = document.createElement('li');
  lista.innerText = input.value;
  list.appendChild(lista);
  input.value = ''
  }
};
buttonAdd.addEventListener('click', adicionar);

//  Requisito 07 e 08 // 
function pintarCinza(event) {       
  let contemCinza = document.querySelector('.cinza');
  let cinzar = event.target;
  if (contemCinza == null){
   cinzar.classList.add('cinza');
  } else {   
  contemCinza.classList.remove('cinza');
  cinzar.classList.add('cinza');
 }
}  
list.addEventListener('click', pintarCinza);

//  Requisito 09  //
function clicks(event){
    let classeCompleted = document.querySelector('.completed')
    let clicado = event.target;
    if(clicado.className = classeCompleted){
        clicado.classList.remove('completed')
    } else {
    clicado.classList.add('completed')
    }
  };
list.addEventListener('dblclick', clicks);

// Requisito 10 //
clear.addEventListener('click', function(){
    list.innerHTML = '';
});