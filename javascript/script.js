let elis = [];
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
   * Adiciona o atributo selected quando o alvo for clicado;
   */
  document.getElementById('lista-tarefas').addEventListener('click', event => {
     /* Delegação de eventos; */
    const target = event.target;
    /* Pega todos os elementos da lista; */
    const elements = document.getElementById('lista-tarefas').childNodes;
    /* Verifica se o elemento ja possúi o atributo selected; */
    if (!event.target.hasAttribute('selected')) {
      /* Laço responsável por remover os atributos selected de todos os elementos da lista; */
      for (let value of elements) { // Percorre todos os elementos;
        if (value.tagName == "LI") { // Verifica se o elemento é do tipo LI;
          value.removeAttribute("selected"); // Remove o atributo selected do elemento;
        }
      }

      /* IF responsável por verificar se o elemento clicado é uma tag LI; */
      if (target.tagName == "LI" && target.nodeName == "LI") { // Verifica se o elemento clicado foi uma LI;
        event.target.setAttribute('selected', ''); // Adiciona o atributo selected ao elemento;
      }
    }
  });
}