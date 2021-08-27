//...nums ---> SPREAD os argumentos da lista como parametros
//...nums ---> SPREAD os argumentos da lista como parametros
//...nums ---> SPREAD os argumentos da lista como parametros

const nums = [11,23,3,4,88,5,65,71]

console.log("O maximo eh: "+ Math.max(...nums))
console.log("O minimo eh: "+ Math.min(...nums))

//console.log(...nums)
//1 11 23 3 4 88 5 65 71

let olaAmigo = "HelloMyFriend";
console.log(...olaAmigo)

let cats = ["cat1", "gato2", "neko3"]
let dogs = ["dog1", "cachorro2", "inu3"]

let allPets = [...cats, ...dogs, "BixanoExtra", 33]
console.log("All cats and dogs LISTS: " + allPets)
console.log(...allPets)

// -=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=
// -=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=
// -=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=

// o OVERWRITE fica como FALSE pois quem ganha eh o segundo elemento
let brasil = {population: 12345, language: "portuguese", continent: "america", overwrite: true}
let brunoShiroma = {...brasil, age: 25, name: "bruno", lastname: "shiroma", overwrite: false}

let brunoShiromaList = Object.entries(brunoShiroma)

console.log("Hello, it is: " + brunoShiroma);
brunoShiromaList.forEach(element => {
    console.log(element);
})

// INDEX - VALUE
// APARECE: 0 - H, 1 - E, 3- L...
let mapeamentoIndexNumber = {..."Hello"}

// -=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=
// -=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=
// -=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=-=-=-=--=-=

const form = {
    email: "blabla@hotmail.com",
    password: "kkkk",
    login: "brunoshiroma"
}

const newUser = {...form, isAdmin: false, id: 123}
let listPrintUser = Object.entries(newUser);

listPrintUser.forEach(elemento => {
    console.log(elemento)
})