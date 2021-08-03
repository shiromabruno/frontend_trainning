
const assuntos = ["futebol", "games", "tecnologia", "carreira", "teste"];

//dessa forma printa o conteudo
// for(let sub of assuntos){
//     console.log(sub)
// }


//dessa forma printa o INDEX
// for(let sub in assuntos){
//     console.log(sub)
// }

// for (let teste of "brunoshiroma"){
//     console.log(teste)
// }

let objeto = {
name: "bruno",
age: 25,
brazil: true,
language: ["pt", "jp", "en", "esp"],
chave: 25
}

console.log(Object.keys(objeto)) // transforma em uma lista, ai pode ser interavel
console.log(Object.values(objeto)) // transforma em uma lista, ai pode ser interavel
console.log(Object.entries(objeto)) // transforma em uma lista, ai pode ser interavel

for (let caracteristicas in objeto){
console.log(`Item do objeto ${caracteristicas}: ${objeto[caracteristicas]}`)
}

let totalNumeros = 0;
for(let valores of Object.values(objeto)){
    if (typeof(valores) == "number"){
        totalNumeros = totalNumeros + valores
    }
//console.log(valores)
}
console.log(`Total valores = ${totalNumeros}`)