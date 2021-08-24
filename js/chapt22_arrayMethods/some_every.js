//SOME RETORNA TRUE OR FALSE NO FINAL
//SOME RETORNA TRUE OR FALSE NO FINAL
//SOME RETORNA TRUE OR FALSE NO FINAL
//ATENDEU A CONDICAO, JA SAI DO SOME (Achou manchester, parou de comparar)

//EVERY SO RETORNA TRUE SE ATENDE TODOS OS REQUISITOS DOS ELEMENTOS
//EVERY SO RETORNA TRUE SE ATENDE TODOS OS REQUISITOS DOS ELEMENTOS
//EVERY SO RETORNA TRUE SE ATENDE TODOS OS REQUISITOS DOS ELEMENTOS
//ATENDEU A CONDICAO, JA SAI DO SOME (Achou manchester, parou de comparar)

let teams = ["barcelona", "mancherster united", "bayern", "real madrid", "milan", "juventus"]


let existeTimeMaior10Charact = teams.some(team => {
    if(team.length > 10){
        return team;
    }
})

console.log("A resposta se a lista tem elementos com mais de 10 elements eh: " + existeTimeMaior10Charact)

// 0-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=

let viagens = [
    {
        pais: "japao",
        preco: 20000
    },
    {
        pais: "inglaterra",
        preco: 30000
    },
    {
        pais: "italia",
        preco: 15000
    },
    {
        pais: "brazil",
        preco: 10000
    },
    {
        pais: "south africa",
        preco: 11000
    }
    ]

let viagemMenorQue10 = viagens.some(viagem => {
    if (viagem.preco < 10000){
        return viagem
    }
})

console.log("A resposta se a lista de viagem tem viagem menor que 10k: " + viagemMenorQue10)

// 0-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=-=-=-=-=-=--=

//Execise retorno so de pares

let allEvens = (x) => x.some(num => num % 2 === 0)