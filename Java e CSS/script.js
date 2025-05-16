// JavaScript demonstration
function doDemo(button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "#fa4";
  square.style.marginLeft = "30px";
  button.setAttribute("disabled", "true");
  setTimeout(clearDemo, 2000, button);
}

function clearDemo(button) {
  var square = document.getElementById("square");
  square.style.backgroundColor = "transparent";
  square.style.marginLeft = "0";
  button.removeAttribute("disabled");
}

// Desafio de mover o bloco quando clicado e quando 
// passar tempo, fazer com que ele retorne a sua 
// posição original //