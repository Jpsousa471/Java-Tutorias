var select = document.querySelector("select");
var html = document.querySelector(".output");

select.onchange = function(){
    var choice = select.value;

    switch(choice){
        case "Branco":
            update("white","black");
            break;
        case "Preto":
            update("black","white");
            break;
        case "Roxo":
            update("purple","white");
            break;
        case "Amarelo":
            update("yellow","black");
            break;
        case "Verde":
            update("green","white");
            break;
        default :
            update(white)
    }
}


function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
}