// isNaN() verifica se um valor é NaN (not a number) - Retorna um valor boelano
// toFixed() é usado 
// Math.floor() arredonda para baixo
// Math.ceil() Arredonda para cima
// Math.random() gera numero aleatorio

// Atribuir na mesma linha:
/*
let a = 10, let b = 15, let c = 20
*/




/////////// SOMAR NUMEROS





function somar () {
    const n1 = parseInt(prompt('Digite seu primeiro número: '));
    const n2 = parseInt(prompt('Digite seu segundo número: '));

    let soma = n1 + n2;
    let resultado = alert(`\n A Soma de ${n1} com ${n2} é: \n ${soma}`);
    let condicao = true;
    
    for(i=0; condicao; i++) {
        const next = prompt("Deseja continuar a somar outros números ?")
        
        if (next == 'Sim' || next == 'sim') {
            somar();
        }

        else{
            condicao = false;
        }
    }

    return resultado
}


somar()