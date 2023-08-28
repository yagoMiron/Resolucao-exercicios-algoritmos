/*
import promptSync from 'prompt-sync';
const prompt = promptSync();
*/
//----------------------------------------------------------------------------

// 2) O custo de um carro novo ao consumidor é a soma do
// custo de fábrica com a porcentagem do distribuidor e dos
// impostos (aplicados ao custo de fábrica). Supondo que o
// percentual do distribuidor seja de 28% e os impostos de
// 45%, escrever um algoritmo para LER o custo de fábrica de
// um carro, calcular e escrever o custo final ao consumidor

const prompt = require("prompt-sync")();

// dessa vez o proprio enunciado nos deu dois valores fixos, 28% e 
// 35%, como são valores fixos que não devem ser alterados ao longo do 
// programa podemo declarar os dois como const
const porcentagem_distribuidor = 28/100;
const impostos = 45/100;
// as consts são constantes, não podem ser modificadas, re-declaradas e etc
// como ambos são porcentagens podemos declarar ambos com o valor já dividido 
// por 100 dessa forma

let custo_carro = Number(prompt("Qual o custo de fabrica do carro? "));

// agora precimamos calcular o preço final, seguindo o enunciado as duas 
// porcentagens serão aplicadas ao custo original do carro e após disso 
// precisamos somar ao valor original 
let custo_final_carro = (custo_carro*porcentagem_distribuidor) + (custo_carro*impostos) + custo_carro;

console.log(`O valor final do carro é ${custo_final_carro}`);
// este é um jeito diferente de escrever o valor a ser imprimido, isso se chama
// template string, nós usamos ` (crase) ao invez das aspas e escrevemos as variaveis
// após o sinal de $ (cifrão) e entre {} (chaves)
// a vantagem de usar a template string é apenas tornar o codigo mais legivel