function voltarValor(){
    resultado.innerHTML = "Resultado: ";
}

conv.onkeyup = function(){
    voltarValor()
    let conversao = (document.getElementById("conv").value);
    for(let i = 0; i <= conversao.length; i += 1){
    if (i == conversao.length){
        resultado.innerHTML += conversao.toUpperCase() + " Numero de caracteres digitados: "+ i;
    }
    
    }
    
}
