const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declarando a matriz de nomes de arquivos de imagem */

const images = ['pic1.jpg', `pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`];
const alts = {
  'pic1.jpg' : 'Closeup of a human eye',
  'pic2.jpg' : 'Rock that looks like a wave',
  'pic3.jpg' : 'Purple and white pansies',
  'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
  'pic5.jpg' : 'Large moth on a leaf'
}

/* Percorrendo imagens */

for (const image of images) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${image}`);
  newImage.setAttribute('alt', alts[image]);
  thumbBar.appendChild(newImage);
  newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Conectando o botão Escurecer/Clarear */

btn.addEventListener('click', () => {
  const btnClass = btn.getAttribute('class');
  if (btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
});

//  Explicações do código :
// Esse código é para uma galeria de imagens que permite ao usuário:

// Funcionalidades
// 1. Visualizar imagens: O código cria uma galeria de imagens com miniaturas (thumbnails) que, quando clicadas, são exibidas em tamanho maior.
// 2. Trocar imagens: Ao clicar em uma miniatura, a imagem maior é atualizada para a imagem selecionada.
// 3. Escurecer/Clarear: Um botão permite ao usuário escurecer ou clarear a imagem maior.

// Como funciona
// 1. Criação de miniaturas: O código cria miniaturas de imagens usando um loop for...of e adiciona um evento de clique a cada miniatura.
// 2. Evento de clique: Quando uma miniatura é clicada, o evento de clique atualiza a imagem maior com a imagem selecionada.
// 3. Botão Escurecer/Clarear: O botão tem um evento de clique que alterna entre escurecer e clarear a imagem maior.

// Tecnologias usadas
// - HTML: estrutura da página
// - CSS: estilização da página (não mostrado no código)
// - JavaScript: lógica da galeria de imagens

// Detalhes importantes
// - O código usa document.querySelector para selecionar elementos HTML.
// - O código usa addEventListener para adicionar eventos de clique às miniaturas e ao botão.
// - O código usa setAttribute para definir atributos de elementos HTML.
// - O código usa style para definir estilos de elementos HTML. 


// Explicação do loop for...of

// O loop for...of é uma estrutura de controle de fluxo em JavaScript que permite iterar sobre os valores de um objeto iterável, como arrays, strings, maps, sets, etc.

// Sintaxe
// A sintaxe básica do loop for...of é:

// for (const valor of iteravel) {
//   // código a ser executado
// }

// Como funciona
// 1. O loop for...of itera sobre os valores do objeto iterável.
// 2. A cada iteração, o valor atual é atribuído à variável valor.
// 3. O código dentro do loop é executado para cada valor.

// Exemplo
// Aqui está um exemplo de como usar o loop for...of para iterar sobre um array:

// const frutas = ['maçã', 'banana', 'laranja'];

// for (const fruta of frutas) {
//   console.log(fruta);
// }

// Nesse exemplo, o loop for...of itera sobre os valores do array frutas e imprime cada valor no console.

// Vantagens
// - O loop for...of é mais conciso e fácil de ler do que outros métodos de iteração, como for tradicional ou forEach.
// - Ele funciona com qualquer objeto iterável, incluindo arrays, strings, maps e sets.

// Objetos iteráveis
// O loop for...of funciona com os seguintes objetos iteráveis:

// - Arrays
// - Strings
// - Maps
// - Sets
// - Generators

// Conclusão
// Em resumo, o loop for...of é uma ferramenta útil para iterar sobre os valores de objetos iteráveis em JavaScript, tornando o código mais conciso e fácil de ler.