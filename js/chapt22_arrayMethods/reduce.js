//Acumulador de elementos
//(Acumulador, ElementoAtual)
//(function, INITIAL VALUE) ===> vc coloca o INITIAL como o primeiro valor [como se acrescentasse 1 elemento antes]

let lista1 = [1,2,3,4,5,6,7,8,9,10]

//let totalLista1 = lista1.reduce((x,y) => {return x + y}) 

let totalLista2 = lista1.reduce((x,y) => x + y) 

console.log(`O total eh ${totalLista2}`)

let totalLista3 = lista1.reduce((x,y) => x + y, 100) 

console.log(`O total COM SOMATORIA INICIAL eh ${totalLista3}`)

// *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let lista3 = [5000,1235,23,97,21,99,621,13,456,10]

let menorNumero = lista3.reduce((min, sequencia) => {
    if (min > sequencia){
        return sequencia;
    }
    else{
        return min
    }
})

console.log(`O menor de todos do LISTA3 ${menorNumero}`)

let lista4 = [5000,1235,23,97,21,99,621,13,456,10]

let menorNumero2 = lista4.reduce((min, sequencia) => {
    if (min > sequencia){
        return sequencia;
    }
    else{
        return min
    }
}, 1)

console.log(`O menor de todos do LISTA4 com INICIAL = 1:  ${menorNumero2}`)

// *-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let viagens = [
    {
        pais: "japao",
        preco: 19000
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

    let paisMaisBarato = viagens.reduce((barato, sequencia) => {
        if (barato.preco > sequencia.preco){
            return sequencia
        }
        else{
            return barato
        }
    })

    let paisMaisCaro = viagens.reduce((caro, sequencia) => {
        if (caro.preco > sequencia.preco){
            return caro
        }
        else{
            return sequencia
        }
    })

console.log(`O pais mais barato eh: ${paisMaisBarato}. E o pais mais caro eh: ${paisMaisCaro}`)
console.log("O pais mais barato eh: " + paisMaisBarato + ". E o pais mais caro eh: " + paisMaisCaro)