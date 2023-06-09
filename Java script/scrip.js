caixa.onchange = voltarValor;

function voltarValor(){
    resultado.innerHTML = "resultado:";
}


caixa.onchange = function(){
    voltarValor()
    
    let valor = parseFloat(document.getElementById("caixa").value);

    resultado.innerHTML += Math.pow(valor, 3);

}

