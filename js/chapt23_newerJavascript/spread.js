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