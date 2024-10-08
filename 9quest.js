//Crie um programa que receba um código de status HTTP (por exemplo, 200, 404, 500) e 
//exiba a mensagem correspondente (por exemplo, "OK" para 200, "Not Found" para 404). 
//Utilize switch para mapear os códigos de status

const prompt = require('prompt-sync')();

const http = parseInt(prompt(`informe a mensagem http (200, 404, 500): `));

switch (http){
    case 200:
        console.log(`OK`);
        break;
    case 404:
        console.log(`Not Found`);
        break;
    case 500:
        console.log(`Internal Server Error`);
        break;
    }