// Exercício 02

/* Crie uma array de planetas que inclua "Terra", "Marte", "Plutão", "Vênus", "Júpiter", "Saturno"  e, em seguida, peça ao usuário para digitar o nome de um planeta.

Verifique se o planeta que o usuário informou está na array e informe ao usuário. */



(function(){
    let planetas = ['Terra', 'Marte', 'Plutao', 'Venus', 'Jupiter', 'Saturno'];
    
    pesquisarPlaneta(planetas);
})()


function pesquisarPlaneta (planetas) {
    let pesquisa = prompt('Digite um planeta que gostaria de pesquisar: ');
    let tamanhoLista = planetas.length;
    let naoExiste = true; //Variavel de referencia para imprimir que um elemento não
    //Existe; somente uma vez ao usuario
    
    for (let i = 0; i < tamanhoLista; i++){ //Tamanho do array(length): 6 //Quantidade de index: 5
        let gravarIndex = planetas[i];
        if (pesquisa === gravarIndex){ //Verifica se o prompt existe dentro da lista
            console.log('existe.'); //Se sim, primeira coisa é imprimir isso ao usuario
            naoExiste = false; //A variavel de referencia é atualizada, para false
            //Ou seja, foi comprovada a existencia do prompt na lista, então cancela a variavel
            break; //Não a mais necessidade de continuar o loop se o problema foi resolvido
        }
    }

    if (naoExiste) { //Se passar pelo loop e não achar o valor correspondente
        //Ele irá seguir para este bloco pois automaticamente já defini que por padrão
        //naoExiste é true, ou seja, que o prompt não existe até que se prove o contrário
        console.log('Não existe!');
    }
}



//Acrescentar retorno no caso de nao existir na lista