const nome = 'Vitor';
const sobrenome = 'Figueiredo';
const idade = 20;
const altura = 1.75;
const peso = 57;

let imc = peso / (altura * altura);
let anoNascimento = new Date().getFullYear() - idade;

console.log(
    `
    ${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg
    tem ${altura} de altura e seu IMC é de ${imc}
    ${nome} ${sobrenome} nasceu em ${anoNascimento}
    `
);
