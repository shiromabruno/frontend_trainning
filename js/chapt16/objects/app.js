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

