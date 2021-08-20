

let numeros = [1, 2, 3, 4, 5, 6]

// PODE SER USADO COM OF OU COM LISTA.FOREACH
// PODE SER USADO COM OF OU COM LISTA.FOREACH
// PODE SER USADO COM OF OU COM LISTA.FOREACH
// for(let sub of numeros){
//     console.log(sub)
// }

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
    preco: 10000
}
]

function duplica (x){
    return x * 2;
}

// numeros.forEach(teste => console.log(teste*teste))

// numeros.forEach(element => console.log("Duplicando valor: " + duplica(element)))

// numeros.forEach(function triplica(n){
//  console.log("Triplicando valor: " + n * 3)
// })

// viagens.forEach(function printBarato(element){
//     if(element.preco < 10001) { 
//         console.log("O pais " + element.pais + " possui valor MENOR que 10.000. Vamos viajar")
//     }
//     else{
//         console.log("O pais " + element.pais + " possui valor MAIOR que 10.000. Nao da para viajar")
//     }
// })

viagens.forEach((element) => {
    if(element.preco < 10001) { 
        console.log("O pais " + element.pais + " possui valor MENOR que 10.000. Vamos viajar")
    }
    else{
        console.log("O pais " + element.pais + " possui valor MAIOR que 10.000. Nao da para viajar")
    }
}
)

// NAO FUNCIONOU... PQ ?
viagens.forEach((element) => {
    if(element.preco < 10001) { 
        return `O pais ${element.pais}  possui valor MENOR que 10.000. Vamos viajar`
    }
    else{
        return `O pais ${element.pais}  possui valor MAIOR que 10.000. Nao da para viajar`
    }
}
)


// arrow com map pra voltar nova lista
let listaPaisesBaratos = viagens.map( (element) => {
    if(element.preco < 10001) { 
        return element
    }
})

