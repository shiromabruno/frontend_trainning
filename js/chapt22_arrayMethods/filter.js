//FILTER CRIA UM NOVO ARRAY COM ELEMENTOS QUE PASSAM DO TESTE
//FILTER CRIA UM NOVO ARRAY COM ELEMENTOS QUE PASSAM DO TESTE
//FILTER CRIA UM NOVO ARRAY COM ELEMENTOS QUE PASSAM DO TESTE
// O MAP VOLTA TUDO, SE NAO ATENDEU A CONDICAO, A POSICAO DELE NO ARRAY FICA UNDEFINED
// O MAP VOLTA TUDO, SE NAO ATENDEU A CONDICAO, A POSICAO DELE NO ARRAY FICA UNDEFINED
// O MAP VOLTA TUDO, SE NAO ATENDEU A CONDICAO, A POSICAO DELE NO ARRAY FICA UNDEFINED

let listaAlunos = [
    {
        nome: "fulano",
        nota: 5
    },
    {
        nome: "beltrano",
        nota: 3
    },
    {
        nome: "aluno que passou",
        nota: 8
    },
    {
        nome: "ciclano",
        nota: 4
    },
    {
        nome: "outro aluno que passou!",
        nota: 10
    }
]

let listaAprovados = listaAlunos.filter(aluno =>{
    if (aluno.nota > 6 ){
        return aluno
    }
    else{
        //SE QUiser montar lista de alunos reprovados
        //return aluno
    }
}
)

console.log(listaAprovados);
console.log("////////////////////////////////////////")
console.log("////////////////////////////////////////")

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let listaReprovados = listaAlunos.filter( element => element.nota < 6)
//console.log(listaReprovados);
let listaNomesReprovados = listaReprovados.map(element => element.nome)
console.log(listaNomesReprovados);

// MESMA COISA QUE DE CIMA EM 1 LINHA
let listaReprovadosNomesUmaLinha = listaAlunos.filter(element => element.nota < 6).map(element => element.nome)
console.log(listaReprovadosNomesUmaLinha)

console.log("////////////////////////////////////////")
console.log("////////////////////////////////////////")

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let listaNumeros = [1,2,3,4,5,6,7,8,9,10]

let listaNumerosPares1 = listaNumeros.filter(element => element % 2 === 0)
console.log(listaNumerosPares1)

let listaNumerosPares2 = listaNumeros.filter(element => { 
    if (element % 2 === 0) {return element}
})
console.log(listaNumerosPares2)

let listaNumerosPares3 = listaNumeros.filter(element => (element % 2 === 0))
console.log(listaNumerosPares3)