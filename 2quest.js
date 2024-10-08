// Crie um programa que receba uma nota de 0 a 10 e exiba uma mensagem de acordo com a 
// nota:
// o 0 a 4: "Reprovado"
// o 5 a 6: "Recuperação"
// o 7 a 10: "Aprovado"

const prompt = require('prompt-sync')();

const nota = parseInt(prompt(`informe sua nota: `));

switch (nota){
    case 0:
        console.log(`Reprovado`);
        break;
    case 1:
        console.log(`Reprovado`);
        break;
    case 2:
        console.log(`Reprovado`);
        break;
    case 3:
        console.log(`Reprovado`);
        break;
    case 4:
        console.log(`Reprovado`);
        break;
    case 5:
        console.log(`Recuperação`);
        break;
    case 6:
        console.log(`Recuperação`);
        break;
    case 7:
        console.log(`Aprovado`);
        break;
    case 8:
        console.log(`Aprovado`);
        break;
    case 9:
        console.log(`Aprovado`);
        break;
    case 10:
        console.log(`Aprovado`);
        break;       
    }