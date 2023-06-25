/*
var n1 = parseInt(prompt("Informe o primeiro valor: "));
var n2 = parseInt(prompt("Informe o primeiro valor: "));
var n3 = parseInt(prompt("Informe o primeiro valor: "));
var n4 = parseInt(prompt("Informe o primeiro valor: "));

alert((n1+n2+n3+n4)/4);


var n1 = parseInt(prompt("Informe seu saldo: "));

alert("Saldo reajustado 2% " + n1*1.02 );


var n1 = parseInt(prompt("Informe uma quantidade de segundos: "));

var resultado = Math.floor(n1/60);

alert("Seus segundos convertidos em minutos são: "+resultado+" minutos e "+n1%60+" segundos");


var n1 = parseInt(prompt("Informe uma quantidade de minutos: "));

var dias = Math.floor(n1/1440);
var minutos = Math.floor(n1%1440) ;
var horas = Math.floor(minutos/60);
var min = Math.floor(minutos%60);

document.write("<h1>Seus minutos convertidos em dias são: "+dias+" dias "+horas+ " horas e "+min+" minutos</h1>");


var n1 = parseInt(prompt("Informe uma quantidade de horas: "));
var n2 = parseInt(prompt("Informe uma quantidade de minutos: "));

document.write('<h1>Suas horas e minutos convertido so para minutos são: '+((n1*60)+n2)+"minutos </h1>" );


var raio = parseInt(prompt("Informe o raio da circunferência : "));
var pi = Math.PI;

document.write('<h1> circunferência '+2*raio*pi+'</h1>');


var n1 = parseInt(prompt("Informe o numero de polegadas : "));

document.write("<h1> polegadas convetida em milímetros são: "+n1*25.4+"milímetros</h1>");
*/

const dataAtual = new Date();

const anoAtual = dataAtual.getFullYear();

var nascimento = document.getElementById("nascimento")
var validador = 1900;

nascimento.onkeyup = function(){
    if(parseInt(nascimento.value) < anoAtual){
        document.write("<p>Idade"+ nascimento.value - anoAtual +"</p>");
    }else if(parseInt(nascimento.value) > anoAtual){
        verif.innerHTML = 'Informe um ano valido'
    }else if(parseInt(nascimento.value) < validador){
        verif.innerHTML='Informe um ano valido'

    }else{
        verif.innerHTML='Informe um ano valido'
    }
};

