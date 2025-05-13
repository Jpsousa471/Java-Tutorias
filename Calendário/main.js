var seletor = document.querySelector("select");
var list = document.querySelector("ul");
var text = document.querySelector("h1");

seletor.onchange = function() {
    var choice = seletor.value;
    var days = 31;
    if(choice === 'Fevereiro') {
      days = 28;
    } else if(choice === 'Abril' || choice === 'Junho' || choice === 'Setembro'|| choice === 'Novembro') {
      days = 30;
    } else if(choice === ""){
      days = ''
    }
  
    createCalendar(days, choice);
  }
  
  function createCalendar(days, choice) {
    list.innerHTML = '';
    text.textContent = choice;
   for(var i = 1; i <= days; i++) {
      var listItem = document.createElement('li');
      // listItem.style.width = "100%";
      // listItem.style.height = "100%";
      // listItem.style.backgroundColor = "blue";
      listItem.textContent = i;
      list.appendChild(listItem);
    }
   }
  
  createCalendar(31,'January');