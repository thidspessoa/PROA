const temperaturaCelsius = parseFloat(prompt("Digite a temperatura em Celsius: "));
const unidade = prompt("Para qual unidade de temperatura você quer converter:\nA) Fahrenheit\nB) Kelvin");

function converterTemperatura(temperaturaBase, unidade) {
    if (unidade == 'A' || unidade == 'a') {
        return (temperaturaBase * 9/5) + 32;
    } else if (unidade == 'B' || unidade == 'b') {
        return temperaturaBase + 273.15;
    } else {
        return "Unidade de temperatura inválida";
    }
}

const resultado = converterTemperatura(temperaturaCelsius, unidade);

console.log(`O valor convertido é: ${resultado}`);
