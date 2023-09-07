//--------------------------EXERCICIO 01/02-------------------------------------- 
//Calcular numeros e verificar se é par ou impar
// const a = parseInt(prompt('Digite um número: ')); const b = parseInt(prompt('Digite seu segundo numero: '));
// const somar = ((a,b) => {return a + b});
// (somar% 2 == 0 ? console.log(`${somar(a, b)} é impa`) : console.log(`${somar(a, b)} é impar`)) 


//--------------------------EXERCICIO 03--------------------------------------
//Calcula media
// function tratarDados() {
//     let nota1 = parseFloat(document.getElementById('n1').value);
//     let nota2 = parseFloat(document.getElementById('n2').value);
//     let nota3 = parseFloat(document.getElementById('n3').value);
//     let media = (nota1 + nota2 + nota3) / 3;
//     document.getElementById('resultado').value = `A média é: ${media.toFixed(2)}`; 
// }

 


//--------------------------EXERCICIO 04--------------------------------------

// function converterPolegadas(){
//     let valorPolegadas = parseFloat(document.getElementById('n1').value);
//     let valorCm = valorPolegadas * 2.54
//     document.getElementById('resultado').value = `O tamanho é: ${valorCm.toFixed(2)}cm`; 
// }




//--------------------------EXERCICIO 05--------------------------------------

// let somar = (lista) => {let [menor1, menor2] = lista; let somaMenores = menor1 + menor2; return somaMenores}
// let verificarTriangulo = (menores, maior) => {
//     return menores > maior;
// }

// function ladosMenores(lista) {
//     let pivo = lista[0]; // Consideramos o primeiro elemento como pivo
//     let menores = [pivo]; // Inicializamos com o pivo para comparar
    
//     for (let i = 1; i < lista.length; i++) { //Estrutura que compara os valores e cria uma lista com os menores
//         if (lista[i] < menores[0]) {
//             menores[1] = menores[0]; //Abre espaço para inserir o valor comparado
//             menores[0] = lista[i]; //Insere valor comparado
//         } else if (lista[i] < menores[1]) { //Verifica se o pivo é menor que o valor que está na lista, se não for, troca de lista com o outro valor
//             menores[1] = lista[i];
//         } 
//     }

//     let ladoMaior = Math.max(lista); //Obtem o maior valor da lista, utilizamos uma função built-in do propio JS pois sabemos que só queremos saber um unico valor que será o maior.
//     let chamadaSoma = somar(menores);
//     let triangulo = verificarTriangulo(chamadaSoma, ladoMaior);
//     triangulo ? console.log('É possível formar um triângulo') : console.log('Não é possivel formar um triângulo');

// }



// function receberDados() {
//     let lados = [];
//     lados[0] = parseFloat(document.getElementById('n1').value);
//     lados[1] = parseFloat(document.getElementById('n2').value);
//     lados[2] = parseFloat(document.getElementById('n3').value);
    
//     ladosMenores(lados);
    
// }

// Basta fazer a soma entre os dois lados menores. Se a soma entre eles for maior que o terceiro lado,
// então, a soma entre qualquer um deles e o terceiro lado (que é o maior) terá o mesmo resultado.
 

/*CÓDIGO REFEITO:  */
// function verificarTriangulo() {
//     let listaMenores = [];
//     // listaMenores.forEach
//     listaMenores[0] = parseFloat(document.getElementById('n1').value); //o valor retornado pelo método getElementById('nX').value é uma string. 
//     listaMenores[1] = parseFloat(document.getElementById('n2').value);
//     listaMenores[2] = parseFloat(document.getElementById('n3').value);

//     const numeroMaior = Math.max(...listaMenores); //Usando o spread operator para passar os valores como argumentos separados
//     const index = listaMenores.indexOf(numeroMaior);
//     listaMenores.splice(index, 1);

//     [menor1, menor2] = listaMenores
//     const somaMenores = menor1 + menor2

//     if (somaMenores > numeroMaior) {
//         document.getElementById('resultado').value = `Formam um triângulo`
//     } else {
//         document.getElementById('resultado').value = `Não formam um triângulo!`
//     }

// }




//--------------------------EXERCICIO 06--------------------------------------


// function calcularArea(){
//     console.log('Teste')
//     let altura = parseFloat(document.getElementById('n1').value);
//     let largura = parseFloat(document.getElementById('n2').value);
//     let area = (largura * altura)/2;

//     document.getElementById('resultado').value = `A área do triângulo é: ${area.toFixed(2)}`; 
// }





//--------------------------EXERCICIO 07--------------------------------------


// function maiorNumero(){

//     let listaNumeros = [];
//     listaNumeros[0] = parseFloat(document.getElementById('n1').value); 
//     listaNumeros[1] = parseFloat(document.getElementById('n2').value);
//     listaNumeros[2] = parseFloat(document.getElementById ('n3').value);

//     let maior = Math.max(...listaNumeros); //Retorna o maior numero

//     document.getElementById('resultado').value = `O maior número é: ${maior}`;
// }
/* 
usei o spread operator ... para passar os valores individuais do array como argumentos
separados para a função Math.max(), o que permitirá que ela determine o maior número corretamente. */





//--------------------------EXERCICIO 08--------------------------------------


// function desconto(){


//     let valorBase = parseFloat(document.getElementById('n1'));
//     let valorDesconto = parseFloat(document.getElementById('n2'));

//     let decontado = valorBase * (valorDesconto/100)
//     listaNumeros[0] = parseFloat(document.getElementById('n1').value); 
//     listaNumeros[1] = parseFloat(document.getElementById('n2').value);
//     listaNumeros[2] = parseFloat(document.getElementById ('n3').value);

//     let maior = Math.max(...listaNumeros); //Retorna o maior numero

//     document.getElementById('resultado').value = `O maior número é: ${maior}`;
// }




//--------------------------EXERCICIO 09--------------------------------------


function verificarPrimo() {
    let numero = parseFloat(document.getElementById('n1').value);

    if (numero > 1 && isPrimo(numero)) {
        console.log('Seu número é primo');
    } else {
        console.log('Seu número não é primo');
    }
}

function isPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    
    return true;
}






//--------------------------EXERCICIO 10--------------------------------------


// function calcularFatorial() {
//     let numero = parseInt(document.getElementById('n1'));

//     const fatorial = (numero) => {
//         if ( numero == 0 || numero == 1) {
//             return 1

//         } else {
//             return numero * fatorial(numero -1)
//         };
//     };

//     document.getElementById('resultado').value = `O fatorial de ${numero} é ${fatorial(numero)}`
// }