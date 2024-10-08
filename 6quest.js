//Escreva um programa que receba uma letra representando uma categoria de habilitação (A, 
//    B, C, D, ou E) e exiba uma mensagem informando para quais tipos de veículos essa 
//    categoria permite dirigir


const prompt = require('prompt-sync')();

const categoria = (prompt(`informe a categoria: `));

switch (categoria){
    case `A`:
        console.log(`motos, motonetas, ciclomotores e triciclos`);
        break;
    case `B`:
        console.log(`veículos de quatro rodas, desde que o peso total não ultrapasse 3.500 quilos e o número de pessoas seja, no máximo, oito (incluindo o motorista)`);
        break;
    case `C`:
        console.log(`veículos de carga com capacidade superior a 3.500 quilos, como caminhões`);
        break;
    case `D`:
        console.log(`veículos para transporte de passageiros, mais precisamente os que tenham lotação superior a oito pessoas`);
        break;
    case `E`:
        console.log(`engloba todos os veículos disponíveis nas categorias B, C ou D`);
        break;
    }