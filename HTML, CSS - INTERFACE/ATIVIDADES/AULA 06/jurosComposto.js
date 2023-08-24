//Desafio: Calcular montante com juros composto

const capital = parseFloat(prompt("Digite o valor principal: "));
const taxaDeJuros = parseInt(prompt("Digite a taxa de juros(%): "));
const anos = parseInt(prompt("Digite o número de anos: "));

const montante =  capital * (1 + (taxaDeJuros/100)**2)

const resultado = document.write(`Montante com Juros Simples: $ ${montante}`)

//const montante = principal * Math.pow(1 + taxaDeJuros / 100)

