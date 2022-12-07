// somando multiplos
//Dado um número A e o seu limite N, encontre a soma de todos os múltiplos A até o seu limite N.


var a = 3;
var N = 18;
var seq = [];

for (let i = 1; (i*a) <= N; i++){
  seq.push(i*a)

}

let soma = seq.reduce((ant, atual) => ant + atual, 0);

console.log(soma)