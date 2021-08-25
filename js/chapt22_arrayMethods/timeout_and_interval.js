
//SET INTERVAL e SET INTERVAL sao WINDOW functions ?
//SET INTERVAL e SET INTERVAL sao WINDOW functions ?
//SET INTERVAL e SET INTERVAL sao WINDOW functions ?
// EXECUTOU DIRETO SEM CHAMAAR PQ EH WINDOW ?

console.log("Hello")

// SETTIMEOUT precisa passar una function como primeiro argumento
setTimeout(() => {
    console.log("...are you still there?")
}, 5000)

console.log("Well, BYE!")


//Repetindo a cada 2seg. Sempre retorna um ID, no exemplo abaixo sempre sera 1
//Para parar, usar comando: clearInterval(idLoop)
const idLoop = setInterval(() => {
    console.log(`Numero Random: ${Math.random()}`)
    }, 3000)