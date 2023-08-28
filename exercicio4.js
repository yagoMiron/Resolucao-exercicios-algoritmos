/*
import promptSync from 'prompt-sync';
const prompt = promptSync();
*/
//----------------------------------------------------------------------------

// 4) Faça um algoritmo que LEIA a idade de uma pessoa
// expressa em anos, meses e dias e mostre-a expressa
// apenas em dias.

const prompt = require("prompt-sync")();

let anos = Number(prompt("Qual é a sua idade em anos? "));
let meses = Number(prompt(`Você tem ${anos} anos e quantos meses? `));
let dias = Number(prompt(`Você tem ${anos} anos ${meses} meses e quantos dias? `));
// como é um ser humano que vai escrever o valor de cada dado é importante
// pedir cada informação de forma clara e objetiva

let total_dias = (anos*365) + (meses*30) + dias;
// desconsiderando a existencia de anos bissexto e considerando que cada mês 
// tem 30 dias é só multiplicar cada um pelo numero de dias equivalente

console.log(`No total você tem ${total_dias} dias de vida`);

