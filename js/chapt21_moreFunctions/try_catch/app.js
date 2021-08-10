let objetoTeste = {
nome: "bruno",
familyname: "shiroma",
age: 25,
brazillian: true,
valor1: 5,
valor2: 4,
calculatorSoma: function(x,y){ return x + y},
calculatorSubtracao: function(x,y){ return x-y},
multiply(x,y){return x * y},
division(x,y){return x/y},
nomecompleto: `Nome completo eh: ${this.nome} ${this.familyname}`,
funcaoAtributoNomeCompleto: function(){ return `Nome completo eh: ${this.nome} ${this.familyname}`},
howOldAreYou(){ console.log("minha idade eh: " + this.age)},
whatsYourName(){console.log(this.nome)},
retornoObjeto: function(){return this}
}

let objetonovo = objetoTeste.howOldAreYou;

let objetonovo2 = objetoTeste.retornoObjeto;

function grito(){ console.log("AAAHHHHHH")}
/*
grito();
app.js:23 AAAHHHHHH
window.grito();
app.js:23 AAAHHHHHH
*/
function grit2(){ return "EEEHHHH"}
/*
window.grit2();
"EEEHHHH"
*/

/* 
objetoTeste["testando"] = 5
5
objetoTeste.calculatorSoma(5,3)
8
typeof(objetoTeste)
"object"
typeof(Math)
"object"
objetoTeste.multiply(5,8)
40

objetoTeste.howOldAreYou()
app.js:14 minha idade eh: 25
objetonovo()
app.js:14 minha idade eh: undefined
*/

