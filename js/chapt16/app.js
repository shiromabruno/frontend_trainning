// let idadeUser = prompt("Type your age")

// if (idadeUser >= 18){
//     console.log("maior de idade")
//     alert("Ok, you are an adult")
// }
// else{
//     console.log("menor de idade")
//     alert("Calm down kid")
// }

// numero random gerado de 1 ao 10
//let numeroRandom = Math.floor(Math.random() * 10) + 1
let numeroRandom = prompt("Digite sua nota, de 1 a 10")
    if (numeroRandom >= 6){
        console.log("Vc esta APROVADO: " + numeroRandom)
        alert("Vc atingiu o minimo pra passar: " + numeroRandom)
    }
    else if (numeroRandom >= 3 && numeroRandom < 6 ){
        console.log("Vc esta de REC: " + numeroRandom)
        alert("Vc esta de REC: " + numeroRandom)
    }
    else{
        console.log("Vc esta REPROVADO: " + numeroRandom)
        alert("Vc esta REPROVADO: " + numeroRandom)
    }