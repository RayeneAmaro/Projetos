// Uma chamada recursiva
//Neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0. 

var n = parseInt(10);

function somar(n){
    if (n==1){
        return 1;
    } else {
        return(n+somar(n-1))
    }

}

console.log(parseInt(somar(n)))