/*
import promptSync from 'prompt-sync';
const prompt = promptSync();
*/
//----------------------------------------------------------------------------

// 3) Uma revendedora de carros usados paga a seus
// funcionários vendedores um salário fixo por mês, MAIS uma
// comissão também fixa para cada carro vendido e mais 5%
// do valor das vendas por ele efetuadas. Escrever um
// algoritmo que LEIA o número de carros por ele vendidos, o
// valor total de suas vendas, o salário fixo e o valor que ele
// recebe por carro vendido. CALCULE e ESCREVA o salário final
// do vendedor.

const prompt = require("prompt-sync")();

const comicao_fixa = 0.05;
// uma outra forma de representar porcentagem e com o seu equivalente decimal.
// lembre-se que aqui devemos usar o . (ponto) para separar o valor inteiro do 
// decima ao invez da , (virgula)

let numero_carros = Number(prompt("Quantos carros você vendeu nesse mês? "));
let total_vendas = Number(prompt("Qual o valor total das vendas realizadas por você "));
let salario_fixo = Number(prompt("Qual é o seu salário fixo? "));
let comicao_vendas = Number(prompt("Qual sua comissão fixa por carro vendido? "));
// esses 4 são respectivamente os 4 valores que problema pede para o programa ler


let salario_final = salario_fixo + (comicao_vendas * numero_carros) + (total_vendas*comicao_fixa);
// para descobrir como montar o calculo é necessário interpretar o problema e talvez até 
// tentar resolver uma versão do problema em um caderno para depois implementar ao codigo

console.log(`O seu salário final é ${salario_final}`);
// para conferir se o resultado está correto é bom testar o codigo e usar a calculadora 
// para conferir o resultado