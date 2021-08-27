function rollDice(numSides){
    if(numSides === undefined || !(typeof(numSides) == Number)){
        return Math.floor(Math.random() * 50) + 1 
    }
    else{
   return Math.floor(Math.random() * numSides) + 1 
    }
}

// mas nao tem tratamento de tipagem... exemplo abaixo so trata se passar sem argumento
function rollDiceBetter(numSides = 50){
    return Math.floor(Math.random() * numSides) + 1  
}

// se passar : sayHello("bruno"), ele ira pensar que "bruno" eh do msg
// REGRA: PARAMETROS SEM VALOR PADRAO IRA NA FRENTE
// REGRA: PARAMETROS SEM VALOR PADRAO IRA NA FRENTE
//function sayHello(msg = "Nao Passou Nada", person = "pessoa padrao"){
function sayHello(person, msg = "Nao Passou Nada", punctuation="!!"){
    console.log(`${msg}, ${person}${punctuation}`)
}