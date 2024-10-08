//Desenvolva um programa que receba o número de um mês (de 1 a 12) e exiba quantos dias 
//esse mês possui. Considere fevereiro com 28 dias. Use a estrutura switch para implementar 
//a lógica.

const prompt = require('prompt-sync')();

const ano = parseInt(prompt(`informe um número de 1 a 12: `));

switch (ano){
    case 12:
        console.log(`31 dias`);
        break;
    case 1:
        console.log(`31 dias`);
        break;
    case 2:
        console.log(`28 dias`);
        break;
    case 3:
        console.log(`31 dias`);
        break;
    case 4:
        console.log(`30 dias`);
        break;
    case 5:
        console.log(`31 dias`);
        break;
    case 6:
        console.log(`30 dias`);
        break;
    case 7:
        console.log(`31 dias`);
        break;
    case 8:
        console.log(`31 dias`);
        break;
    case 9:
        console.log(`30 dias`);
        break;
    case 10:
        console.log(`31 dias`);
        break;
    case 11:
        console.log(`30 dias`);
        break;
    }