//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// let idadeUser = prompt("Type your age")

// if (idadeUser >= 18){
//     console.log("maior de idade")
//     alert("Ok, you are an adult")
// }
// else{
//     console.log("menor de idade")
//     alert("Calm down kid")
// }
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// numero random gerado de 1 ao 10
//let numeroRandom = Math.floor(Math.random() * 10) + 1
// let numeroRandom = prompt("Digite sua nota, de 1 a 10")
//     if (numeroRandom >= 6){
//         console.log("Vc esta APROVADO: " + numeroRandom)
//         alert("Vc atingiu o minimo pra passar: " + numeroRandom)
//     }
//     else if (numeroRandom >= 3 && numeroRandom < 6 ){
//         console.log("Vc esta de REC: " + numeroRandom)
//         alert("Vc esta de REC: " + numeroRandom)
//     }
//     else{
//         console.log("Vc esta REPROVADO: " + numeroRandom)
//         alert("Vc esta REPROVADO: " + numeroRandom)
//     }
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

    //const teste = prompt("Digite algo pra ver se eh TRUTHY oR FALSY")
// TRUTHY = Qualquer coisa diferente de FALSY
// FALSY = 0, "", FALSE, NaN, Undefinied
   
//    if(teste){  // Esse IF pergunta se ta VAZIO
    //if(123){ // sempre TRUTH , se fosse IF(0) seria sempre FALSE, pois 0 = FALSE
    //if(0){  // sempre FALSE
    //if(NaN){ //sempre FALSE. Sempre fosse Undefinied tbm
    let variavel = " "; // se for 0, "", NaN, Undefinied... cai FALSY

     if(variavel){
        alert("TRUTHY") 
        console.warn("Good")
    }
     else{
         alert("FALSY")
         console.error("Nooo")
     }

    //-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=