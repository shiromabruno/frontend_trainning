//REST PARAM = Pega o VALOR DO ARUMENT e transforma em uma lista
//REST PARAM = Pega o VALOR DO ARUMENT e transforma em uma lista
// PODE CONCATENAR = function raceResult(gold, silver, ...others)
//SEM o ... (rest param), o argument nao eh uma lista por completo (NAO DA PRA FAZER REDUCE POR EXEMPLO, mas tem LENGTH)
//SEM o ... (rest param), o argument nao eh uma lista por completo (NAO DA PRA FAZER REDUCE POR EXEMPLO, mas tem LENGTH)
//ARGUMENT (sem ...) nao tem PUSH/POP por exemplo

//teste(123, "oi")
//Arguments(2) [123, "oi", callee: ƒ, Symbol(Symbol.iterator): ƒ]
function teste(){
    console.log(arguments)
} 

//sumSemRestParam(1,2,3,4,5,6,7,8,9)
//Uncaught TypeError: arguments.reduce is not a function
function sumSemRestParam(){
    //console.log(arguments)
   total =  arguments.reduce((x,y) => {return x + y})
   console.log("Total eh: " + total)
}

//sumComRestParam(1,2,3,4,5,6,7,8,9)
//Total eh: 45
function sumComRestParam(...nums){
    //console.log(arguments)
    let total = nums.reduce((x,y) => {return x + y})
    console.log("Total eh: " + total)
}

function sumComRestParamFor(...nums){
    //console.log(arguments)
    let total = 0;
    for(let element of nums) {
        total = total + element;
    }
    console.log("Total FOR eh: " + total);
}

//raceResult("bruno", "shiroma", "teste1", "teste2", "teste3")
//GOLD MEDAL GOES TO: bruno
//SILVER MEDAL GOES TO: shiroma
//Others guys: teste1,teste2,teste3
//Se nao tivesse passado o SHIROMA, ai o teste1 seria o SILVER
function raceResult(gold, silver, ...others){
console.log(`GOLD MEDAL GOES TO: ${gold}`)
console.log(`SILVER MEDAL GOES TO: ${silver}`)
console.log(`Others guys: ${others}`)
}