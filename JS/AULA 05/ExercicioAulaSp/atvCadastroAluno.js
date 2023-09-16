/*Crie um programa onde o usuário possa cadastrar estudantes sem limites, e, em seguida, Se o usuário digitar "PARE" o programa deve exibir a quantidade de estudantes cadastrados e a lista com cada um deles.*/





function menu() { //colocar todo o bloco de codigo aqui dentro para poder automatizar
    let listaAlunos = [];
    let x = true;
    
    do {
        let condition = true;
        let opcaoMenu = parseInt(prompt('Escolha uma opção:\n1) Inserir aluno na lista\n2) Exibir lista de aluno atual\n3) Sair'));
        
        while (condition) { /*fiz em um loop, justamente para o usuario poder inserir quantos nomes quiser seguidamente*/
            if(opcaoMenu == 1) { //Insere aluno na lista
                let aluno = prompt('Digite o nome do aluno:\n(para regressao ao menu anterior, digite 1)')
                let campo = aluno.length; //armazena a quantidade de caracter no campo de aluno
                if (aluno != '1' && campo > 0) { //trata o caso de o usuario digitar um campo vazil
                    listaAlunos.push(aluno);
                    console.log(`${aluno} cadastrado com sucesso`)
     
                    //console.log(listaAlunos)
                } else {
                    break;
                }
                
            }else if (opcaoMenu == 2) { //exibe alunos na lista      
                let tamanhoLista = listaAlunos.length; //armazena o tamanho da lista 
                for(let i = 0; i <= tamanhoLista; i++){ //itera sobre cada elemento da lista
                    let alunos = listaAlunos[i];
                    console.log(alunos);
        
                }
                break;
            } else if (opcaoMenu == 3) { //encerra o programa
                x = !x;
                break
            }
        
         }
       
    } while (x);
}

