//saySomething();

function saySomething(){
    console.log("Thing 1")
    console.log("Thing 2")
    console.log("Thing 3")
}

function soma(value1, value2){
    return value1 + value2;
}

// let resultado = soma(5,3);
// console.log(`resultado da funcao eh: ${resultado}`)

let personObject = {
    nome: "bruno",
    age: 25,
    isBrazil: true
}

function printObject(Object){
    console.log(Object.values(Object))
}

function heyThere(person){
    if (person){
        console.log(`hello  ${person}`)
    }
    else{
        console.log(`hello  mr. Anonino`)
    }
}