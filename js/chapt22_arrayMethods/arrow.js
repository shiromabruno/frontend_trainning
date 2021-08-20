let calculoNumeroDouble = (x) => {
    return x * 2;
}

//OU

let calculoNumeroDouble2 = function dobra (x){
    return x * 2;
}

let calculoDoisNumerosx = (x,y) => {
    return x * y;
}

let calculoDoisNumerosx2 = function dobra (x,y){
    return x * y;
}

let listaNumbers = [1,2,3,4,5,6];
let somaTotal = 0;
listaNumbers.forEach(element => {
    somaTotal =  somaTotal + element;
})

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

let retornoComChaves = (x) => {
    console.log(`Hey ${x}!`)
    return `Hey ${x}!`
}

let retornoComChavesSemReturn = (x) => {
    //console.log(`Hey ${x}!`)
    `Hey ${x}!`
}

let retornoSemChavesComParenteses = x => (
    `Hey ${x}!`
)

let retornoSemChavesSemParenteses = (x) => `Hey ${x}!`

const isEven = num => num % 2 === 0;

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
let numeros = [1, 2, 3, 4, 5, 6]

let numerosDobrados = numeros.map(function dobra(elemento){
return elemento*2;
})

let numerosDobradosArrow = numeros.map( (x) =>  (x * 2))