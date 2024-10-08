// Crie um programa que receba um valor numérico correspondente a uma operação 
// aritmética (1 para soma, 2 para subtração, 3 para multiplicação, 4 para divisão) e, com base 
// nesse valor, execute a operação entre dois números fornecidos pelo usuário


const prompt = require('prompt-sync')();
const number1 = parseInt(prompt(`informe um número: `));
const number2 = parseInt(prompt(`informe outro número: `));

const operacao = parseInt(prompt(`informe a operacao: `));

switch (operacao){
    case 1:
        console.log(number1 + number2);
        break;
    case 2:
        console.log(number1 - number2);
        break;
    case 3:
        console.log(number1 * number2);
        break;
    case 4:
        console.log(number1 / number2);
        break;
    }