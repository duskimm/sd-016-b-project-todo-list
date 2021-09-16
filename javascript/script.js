/**
 * Prototipo de Função;
 * Pega e Retorna Valores;
 */
function getValue(element) {
  return element.value;
}

/**
 * Prototipo de Função;
 * Seleciona todos os elementos;
 */
 function getElements(element) {
  return document.querySelectorAll(element);
}

/**
 * Adiciona os valores na lista;
 */
function setList(value) {
  const element = document.getElementById('lista-tarefas');
  const li = document.createElement('li');
  li.innerHTML = value;
  element.appendChild(li);
}
/**
 * Executa funções assim que o DOM for carregado;
 */

window.onload = () =>  {
  /** 
   * Adiciona o valor do INPUT na lista; 
   */
  document.getElementById('criar-tarefa').addEventListener('click', () => {
    setList(document.getElementById('texto-tarefa').value);
  });
  /**
   * Adiciona o atributo selected quando a li for clicada;
   */
}