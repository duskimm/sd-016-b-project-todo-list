const bodyElement = document.body;
function inputed(){
const createInput = document.createElement('input');
createInput.id ='texto-tarefa';
bodyElement.appendChild(createInput);
}
inputed();

function list(){
const createListOl = document.createElement('ol');
createListOl.id ='lista-tarefas';
bodyElement.appendChild(createListOl);
}
list();