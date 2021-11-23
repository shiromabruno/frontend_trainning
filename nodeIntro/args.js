// ignorando posicao 0 [node.exe] e posicao 1 [caminho desse args.js]
let argumentos = process.argv.slice(2)

for(let arg of argumentos){
    console.log(`Printando argumento ${arg}. Execucao loop`)
}

console.log("Hello from args.js file")
console.log(process.argv)