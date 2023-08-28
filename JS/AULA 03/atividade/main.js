//--------------------------EXERCICIO 01/02-------------------------------------- 
//Calcular numeros e verificar se é par ou impar
// const a = parseInt(prompt('Digite um número: ')); const b = parseInt(prompt('Digite seu segundo numero: '));
// const somar = ((a,b) => {return a + b});
// (somar% 2 == 0 ? console.log(`${somar(a, b)} é impa`) : console.log(`${somar(a, b)} é impar`)) 


//--------------------------EXERCICIO 03--------------------------------------
//Calcula media
function tratarDados() {
    let nota1 = parseFloat(document.getElementById('n1').value);
    let nota2 = parseFloat(document.getElementById('n2').value);
    let nota3 = parseFloat(document.getElementById('n3').value);
    let media = (nota1 + nota2 + nota3) / 3;
    document.getElementById('resultado').value = `A média é: ${media.toFixed(2)}`; 
}

 