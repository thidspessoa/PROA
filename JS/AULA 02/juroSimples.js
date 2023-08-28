/*Saber a diferença entre quanto ele pegou como agiota e emprestado e saber
se joão perdeu ou ganhou dinheiro.

* INVETER VALORES DE JUROS (AGIOTA = 2109 e AMG = 2200)

*AUTOMATIZAR O CODIGO E INTERAGIR COM HTML*/
let valorInicial = 2000.00
console.log(`João tinha inicialmente $${valorInicial}\n mas acabou perdendo tudo, então ele:`)

//PEGOU COM AGIOTA
const capital = 2000.00
const taxaJuros = 10
const periodo = 1
const juros = capital * (taxaJuros/100) * periodo //Juros apos um ano
const montante = capital + juros //"o valor do capital somado ao juro" Valor total de tudo que gastou
console.log(`Pegou com agiota $${capital}, pagou juros de $${juros} em ${periodo} ano.\n No total, pagou ao agiota $${montante}`) 
/*console.log(`Pegando emprestado $ ${capital} com juros de ${taxaJuros}% \nO juros em um ano será de: $ ${juros}\n o montante total
será de $ ${montante}`)*/


//EMPRESTADO
const emprestou = 1900.00
const taxaDeJuros = 11
const jurosEmprestimo = emprestou * (taxaDeJuros/100) * periodo //Juros apos um ano
const totalMontante = emprestou + jurosEmprestimo
console.log(`Emprestou ao amigo $${emprestou}, cobrou juros de $${jurosEmprestimo} em ${periodo} ano.\n No total, recebeu do amigo $${totalMontante}`)

//Juros composto quando tem 1 ano, tem a formula igual o juros simples


//DIFERENÇA
const diferenca = totalMontante - montante
console.log(diferenca)
