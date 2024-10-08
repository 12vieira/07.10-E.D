//Faça um programa que receba um número de 1 a 4 representando uma estação do ano (1 
//    para "Primavera", 2 para "Verão", 3 para "Outono", 4 para "Inverno") e exiba uma 
//    mensagem com a estação correspondente. Use o switch para definir cada caso

const prompt = require('prompt-sync')();

const estacao = parseInt(prompt(`informe a estacao (1 a 4): `));

switch (estacao){
    case 1:
        console.log(`Primavera`);
        break;
    case 2:
        console.log(`Verão`);
        break;
    case 3:
        console.log(`Outono`);
        break;
    case 4:
        console.log(`Inverno`);
        break;
    }