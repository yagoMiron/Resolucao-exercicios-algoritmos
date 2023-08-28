/*
import promptSync from 'prompt-sync';
const prompt = promptSync();
*/
//----------------------------------------------------------------------------

// 5) Faça um algoritmo que LEIA a idade de uma
// pessoa expressa em dias e mostre-a expressa em
// anos, meses e dias.

const prompt = require("prompt-sync")();

const dias_total = Number(prompt("Quantos dias de vida no total você tem? "));
// este problema é o oposto do problema anterior, nesse você deve cnstruir a idade
// apenas com o total de dias

// esse é o tipo de problema que precisamos escrever em uma folha para entender como executar
const anos = parseInt(dias_total / 365);
// para calcular os anos é facil, basta dividir o numero por 365, porem esse valor pode ter
// resto decimal, e para o nosso problema o numero de anos obrigatóriamente tem que ser um 
// numero inteiro, para isso podemos usar parseInt() que é um metodo que converte numero para
// inteiro, ou seja, obrigatoriamente sempre vai descartar os valores decimais

// para calcular os meses precisamos usar apenas os dias que não foram usados para calcular os anos
// para isso basta subtrair de dias_total o valor anos vezes 365, e sempre usando os parenteses para
// garantir que o calculo seja feito na ordem certa
const meses = Math.floor( (dias_total - (anos * 365)) / 30 );
// nessa situação podemos usar Math.floor ao inves de parseInt, Math.floor é um metodo que arredonda
// numeros para baixo, ou seja, eliminando a sobra da divisão assim como parseInt, nessa situação é 
// mais recomendavel o uso de Math.floor por deixar o codigo mais legivel mas ambos fazem a mesma coisa

const dias = dias_total - (anos * 365) - (meses * 30);
//por fim, o valor de dias é oque restou e não foi usado nen para meses e nen para anos

console.log(`Você tem ${anos} anos, ${meses} meses e ${dias} dias`);
