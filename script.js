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
function clicks (event){
  if (event.target.classList.contains('completed')){
    event.target.classList.remove('completed');
  } else {
    event.target.classList.add('completed');
  }
}
list.addEventListener('dblclick', clicks);

// Requisito 10 //
clear.addEventListener('click', function(){
    list.innerHTML = '';
});

// Requisito 11 //
const removeFi = document.getElementById('remover-finalizados');

function removeFinalizados (){
  const completed = document.querySelectorAll('.completed');
    for (let ind = 0; ind < completed.length ; ind += 1 ){
         completed[ind].remove();             
    }
}
removeFi.addEventListener('click', removeFinalizados);

