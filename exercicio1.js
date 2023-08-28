// JEITO ALTERNÁTIVO DE IMPORTAR A BIBLIOTECA PROMPT-SYNK, 
// apenas disponivel a partir do node 13.2.0
/*
import promptSync from 'prompt-sync';
const prompt = promptSync();
*/
// para o comando require funcionar antes é necessário ter a respectiva biblioteca instalada
// para instalar prompt-sync na sua pasta basta usar 'npm install prompt-sync' no terminal e dar enter
// --------------------------------------------------------------------------------------------------
// 1) Escreva um algoritmo para LER o salário mensal atual de
// um funcionário e o percentual de reajuste. Calcular e
// escrever o valor do novo salário.

const prompt = require("prompt-sync")(); // se precisamos LER algo então precisamos da biblioteca prompt-sync

// agora o primeiro passo seguindo o enunciado do exercicio é ler o SALARIO que o usuário digitar e colocar 
// esse valor dentro de uma variavel

let salario_mensal = prompt("Qual seu salário mensal atual? ");
// o comando prompt imprime o texto entre parenteses no terminal e aguarda o usuario digitar o valor,
// porem agora temos um novo problema, o comando prompt sempre recebe um valor do tipo STRING do usuario,
// ou seja, um texto, e para fazer qualquer operação matemática antes precisamos transformar esse texto em
// um nuero, ou seja, transformar a STRING em um NUMBER

salario_mensal = Number(salario_mensal);
// nessa linha convertemos o tipo de dado que estava escrito em salario-mensal para o tipo NUMBER e
// substituimos o antigo valor pelo novo


let percentual_de_reajuste = Number(prompt("Qual é o percentual de reajuste do seu salário? "));
// agora que aprendemos a usar o prompt e o Number podemos fazer o mesmo que fizemos antes só que agora em 
// uma forma compactada, agora o valor que o usuario digitar é convertido para Number antes de ser armazenado

// agora precisamos calcular o novo alário com base no salario_mensal e o percentual_de_reajuste
// para isso vamos calcular primeiro o aumento no salário e depois somar com o salario anterior
// como o almento foi dado em porcentagem precisamos dividir esse numero por 100 para então multiplicar
// pelo salário anterior
let novo_salario = (salario_mensal * percentual_de_reajuste / 100) + salario_mensal;
// após a maquina calcular ela pegará essa nova informação e armazenará em novo_salario


console.log("O seu novo salário é: " + novo_salario);
// console.log serve para escrever textos no terminal, nesse caso vamos imprimir o texto entre aspas e
// em seguida o valor armazenado em novo_salario



