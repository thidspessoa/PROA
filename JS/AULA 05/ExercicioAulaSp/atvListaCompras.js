// Vamos criar uma lista de compras.

// Crie uma array de frutas, exiba-a ao usuário e, em seguida, peça ao usuário para digitar o nome de uma das frutas.

// Caso a fruta esteja no array, remova-a e exiba a mensagem "Fruta foi retirada da lista".

// Peça novamente para o usuário digitar o nome de uma fruta para ser removida.

// Sempre que o usuário procurar por uma que não está no array exiba a mensagem "Fruta indisponível no nosso mercado".

// Quando o array não possuir mais itens dentro de si, escreva "Lista de compras finalizada".


let criarDados = () => {let listFruits = ['maça', 'uva', 'pera', 'banana', 'abacate'];return listFruits;};

function removerLista (list, imput) { //Recebe a array e a entrada do usuario
    let naoExiste = true; //Variavel que define que por padrão, o imput não existe na lista
    for (let i = 0; i < list.length; i++) { //Percorre a lista procurando se o item já existe na array
        let gravarIndex = list[i]; //Grava o elemento percorrido
        if (imput === gravarIndex) { //Compara o imput do usuario com o item iteirado no momento, se for igual ele faz:
            let indiceValor = list.indexOf(gravarIndex); //Salva o indice do valor que será removido, usando como parametro
                                                        //o valor da lista gravado atual, já que é igual ao imput do usuario
            list.splice(indiceValor, 1); //Remove o valor no respectivo indice dele
            naoExiste = false; //Se ele existir, vai alterar o estado da variavel que define como inexistente
            return true;
            
        } 
    }
    if (naoExiste) { //Caso não exista na lista
        window.alert('Fruta indisponivel no nosso mercado!');
    }
    return false;
}
 


// ------------------------- FUNCAO PRINCIPAL --------------------------------
(function () {
    let list = criarDados();
    document.write(`Você possui uma lista com as frutas:\n${list}`); //Exibe a lista de frutas iniciais para o usuario

    while(list.length > 0) { //Loop de remover os itens da lista caso a lista possua algum item
        let frutUser = prompt('Digite uma fruta: ').toLowerCase(); //Recebe o valor do usuario, e aplica a formatação de minusculo ao prompt

        let removeDaLista = removerLista(list, frutUser); //Array e imput do usuario
        
        if (removeDaLista){ // Se a fruta for removida com sucesso da lista, ele irá exibir está mensagem
            window.alert(`A fruta ${frutUser} foi removida da lista`);
        };
        console.log(`Lista Atual:\n${list}`)

        let tamanhoLista = list.length;

        if (tamanhoLista === 0) { //Caso a lista esteja vazia
            console.log("Lista de compras finalizada"); 
        }

    };
 
})();








//função include: Pesquisa um valor na array