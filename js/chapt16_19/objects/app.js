personObject = {
    firstName: "Bruno", 
    lastName: "Shiroma", 
    age:30, 
    place: "Brazil", 
    tag: ["smart", "funny", "nice"], 
    brazillian: true
}

personObject.firstName
"Bruno"
personObject.firstName = "Teste"
undefined
personObject.firstName
"Teste"

let objetocomobjeto = { 
    nome: "bruno",   
    age: 52,
    address: ["sao paulo", "brasil", 55],
    cell: {
    brand: "apple",
    year: 2015,
    price: 1000
    }
   }
   
objetocomobjeto.cell
{brand: "apple", year: 2015, price: 1000}
objetocomobjeto.cell.year
2015
objetocomobjeto.address[0]
"sao paulo"

const objeto = {nome: "bruno", lastname: "shiroma"}
objeto = {nome: "bruno", lastname: "shiroma", key: "kkk"}
Uncaught TypeError: Assignment to constant variable.
    at <anonymous>:1:8
Eu consigo mexer no conteudo (colocar mais coisas como no exemplos abaixo, porem nao reescrever o 'objeto' como acima)

objeto["mais1"] = "kkk"
"kkk"
objeto
{nome: "teste", lastname: "shiroma", mais1: "kkk"}
objeto.mais2 = "teste"
"teste"
objeto
{nome: "teste", lastname: "shiroma", mais1: "kkk", mais2: "teste"}


let teste = {1999: "good", 2020: "bad"}
teste.1999
VM1093:1 Uncaught SyntaxError: Unexpected number
teste[1999]
"good"
teste["1999"]
"good"
birthyear = 2020
2020
teste
{1999: "good", 2020: "bad"}
teste[birthyear]
"bad"

let teste2 = {true: "verdade", null: "temNada"}
undefined
teste2.true
"verdade"
teste2.null
"temNada"
teste2["null"]
"temNada"
teste2["true"]
"verdade"

