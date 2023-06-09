function voltarValor(){
    resultado.innerHTML = "resultado:";
}

botao.onclick = function(){
    voltarValor();
    let valor = parseInt(document.getElementById("val").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);
    let valor3 = parseInt(document.querySelector("#valor3").value);
    if (valor > valor2 && valor > valor3){
        resultado.innerHTML += "O Primeiro valor é maior que o segundo o terceiro valor informado";
    }else if(valor2 > valor && valor2 > valor3){
        resultado.innerHTML += 'O segundo valor é maior que o primeiro e terceiro valor informado';
    }else if(valor3 > valor && valor3 > valor2){
        resultado.innerHTML += "O terceiro valor é maior que o segundo e primeiro valor informado";
    }else{
        resultado.innerHTML += "ambos os 3 valores são iguais";
    }
}