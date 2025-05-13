
var cats = ["Bill", "Jeff", "Pete", "Biggles", "Jasmin"];
var info = "My cats are called ";
var para = document.querySelector(".pa");

// var i = 0: INICIALIZADOR; i< cats.length: CONDIÇÃO DE SAIDA & i++: EXPRESSÂO FINAL //

// for (var i = 0; i < cats.length; i++) {
//     info += cats[i] + ", ";
//   }


// for (var i = 0; i < cats.length; i++) {
//         if (i === cats.length - 1){
//             info += "and" + cats[i] + ".";
//         } else {
//         info += cats[i] + ", ";
//     }
    
// }

// Forma de fazer com o while

// var i = 0;

// while (i < cats.length) {
//   if (i === cats.length - 1) {
//     info += "and " + cats[i] + ".";
//   } else {
//     info += cats[i] + ", ";
//   }

//   i++;
// }

// Forma do... while

var i = 0;

do {
  if (i === cats.length - 1) {
    info += "and " + cats[i] + ".";
  } else {
    info += cats[i] + ", ";
  }

  i++;
} while (i < cats.length);

para.textContent = info;

/////////// Contagem regeressiva //////////////

// var i = 10: INICIALIZADOR; i >= 0: CONDIÇÃO DE SAIDA & i--: EXPRESSÃO FINAL //

// var output = document.querySelector(".output");
// output.innerHTML = '';

// var i = 10;
// while(i >= 0){
//   var paras = document.createElement("p");
//   if(i === 10) {
//     paras.textContent = "Contagem regressiva" + i;
//   } else if(i === 0){
//     paras.textContent = "Lancar!";
//   } else {
//     paras.textContent = i;
//   }

//   output.appendChild(paras);

//   i--;
// }

// Forma for //

// var output = document.querySelector(".output");
// output.innerHTML = '';


// for (var i = 10; i >= 0; i --){

//   var paras = document.createElement("p");
  
//   if(i === 10){
//     paras.textContent = "Contagem regressiva" + i;
//   } else if(i === 0){
//     paras.textContent = "Lancar!";
//   } else {
//     paras.textContent = i;
//   }

//   output.appendChild(paras);

// }

/// Forma do... while ///

var output = document.querySelector(".output");
output.innerHTML = '';

var i = 10;

do {
  var paras = document.createElement("p");

  if(i === 10){
    paras.textContent = "Contagem regressiva" + i;
  } else if(i === 0){
    paras.textContent = "Lancar!";
  } else {
    paras.textContent = i;
  }

  output.appendChild(paras);

 i --;
  } while(i >= 0)


/////////// Lista de convidados ////////////

// var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// var group = document.querySelector(".group");
// var admitted = document.querySelector('.admitted');
// var refused = document.querySelector('.refused');
// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: '

//  for (var i = 0; i < people.length; i++){

//    if(people[i] === "Phil" || people[i] === "Lola"){
//     refused.textContent += people[i] +", ";
//   } else {
//     admitted.textContent += people[i] + ", ";
//   }

// }

// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
// admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

/// FORMA DO... WHILE ///

// var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// var admitted = document.querySelector('.admitted');
// var refused = document.querySelector('.refused');

// admitted.textContent = 'Admit: ';
// refused.textContent = 'Refuse: '
// var i = 0;

// do {
//  if(people[i] === 'Phil' || people[i] === 'Lola') {
//  refused.textContent += people[i] + ', ';
//  } else {
//  admitted.textContent += people[i] + ', ';
//  }
//  i++;
// } while(i < people.length);

// refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
// admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';

/// Forma WHILE ///

var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
var admitted = document.querySelector('.admitted')
var refused = document.querySelector('.refused');

var i = 0;

while(i < people.length) {

  if(people[i] === "Phil" || people[i] === "Lola"){
    refused.textContent += people[i] +", ";
  } else {
    admitted.textContent += people[i] + ", ";
  }

  i++;
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';