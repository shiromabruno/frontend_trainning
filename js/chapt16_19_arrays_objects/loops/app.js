// for(let i = 0; i < 10; i ++){
//     console.log("numero: " + i )
// }


const listaTeste = ["bruno", "shiroma", 400, true, [1,2,3], null]
// for (let i = 0; i < listaTeste.length; i++){
//     console.log("index = " + i + ". Valor Lista: " + listaTeste[i] + ". TypeOf: " +  typeof(listaTeste[i]))
// }

// for (let i = listaTeste.length; i >= 0; i--){ //como comecou com listaTeste.length (tam 6) , nao existe posicao 6, e apareceu undefined
//     console.log("index = " + i + ". Valor Lista: " + listaTeste[i] + ". TypeOf: " +  typeof(listaTeste[i]))
// }

// for (let i = listaTeste.length; i >= 0; i--){ //como comecou com listaTeste.length (tam 6) , nao existe posicao 6, e apareceu undefined
//     console.log(`index = ${i}. Valor Lista: ${listaTeste[i]}. TypeOf: ${typeof(listaTeste[i])}`)
// }

// const lol = "LOL"
// for(let i = 0; i < 4; i++){
//     console.log(`Interation Number: ${i}`)
//     for(let j = 0; j < lol.length; j++){
//         console.log(lol[j])
//     }
// }

// let i = 0;
// while(i < listaTeste.length){
//     console.log(`Valores do listaTeste:  ${listaTeste[i]}`)
//     i++;
// }

const secret = "teste";
let guess = prompt("put password secret:")
while(guess != secret){
    guess = prompt("put password secret AGAIN:")
}
console.log("nice, now it is unlocked")

const lista = [[0,1,2,3], [4,5,6], [7,8,9]]
// for(let i = 0; i < lista.length; i++){
//     console.log(`Interation Number: ${i}`)
//     for(let j = 0; j < lista[i].length; j++){
//         console.log(`Valor da lista[i][j]: ${lista[i][j]}`)
//     }
// }
