
let season = 'summer';
let response;

// Add your code here

/// PRIMEIRA FORMA ///

    function station(season){

        const result = {
        summer: "Uma estação muito quente, perfeita para ir a praia",
        winter: "Uma estação maravilhosa para tomar um chocolate quente!"
    };

    return result[season] || 'Não sabemos qual é esta estação...'

    }

    response = station(season);

    //// SEGUNDA FORMA ////
        
        //     const result = {
        //         summer: "Uma estação muito quente, perfeita para ir a praia",
        //         winter: "Uma estação maravilhosa para tomar um chocolate quente!"
        //     };
        
        //   response = result[season] || 'Não sabemos qual é esta estação...'
    

// Don't edit the code below here!

const section = document.querySelector('.preview');
section.innerHTML = ' ';
let para1 = document.createElement('p');
para1.textContent = response;
section.appendChild(para1);
    