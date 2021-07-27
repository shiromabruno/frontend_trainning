// let colors = ['red', 'green', 'blue'];
// colors.sort()
let stuff = [true, 68, 'cat', 29.2, null];
let stuff2 = [true, 68, 'cat', 29.2, null, ['um', 'outro', 'array', 2.0, true]];
// stuff.length--> 6
// let vazio = [];
//stuff2[5].length 
//stuff2[5][1][1] --> "u"
//stuff2[5][1].length --> 5


// NAO DA CERTO PRA TROCAR. Porem com COLLECTION FUNCIONA
let nome = "brunx"
undefined
nome[4] = "o"
"o"
nome
"brunx"

let arraylongo = ["um", 2, 3.0]
undefined
arraylongo[10] = true
true
arraylongo
(11) ["um", 2, 3, empty × 7, true]
arraylongo[5]
undefined
arraylongo[10]
true

push - add to end  
nomecollection.push("teste")
pop - remove from end
let variavel = teste.pop()
shift - remove from start
let variavel2 = teste.shift()
unshift - add to start
teste.unshift("bruno")

concat - merge arrays
let array3 = array1.concat(array2)
includes - look for a value 
console.log(arrayteste.includes(2)) --> true
indexOf - String.indexOf()
"teste".indexOf('s') --> 2
join - creates a string from an array
arraynovo
(4) ["kk", 1, true, "a"]
arraynovo.join()
"kk,1,true,a"
reverse - reverses an array 
let arraynovo = arra1.reverse()
slice - copies a portion on an array 
let animals = ['ant', 'bison', 'camel', 'duck'. 'elephant']
animals.slice(2,4) ---> array ['camel', 'duck']
animals.slice(-3) ---> array ['camel', 'duck', 'elephant']
splice - removes/replaces elements 
months.splice(1, 0, 'Feb') ----> Array ['jan', 'Feb', 'March', 'April', 'june']
months.splice(4, 1 'May', 'teste') ---> array ['jan', 'feb', 'march', 'april', 'may', 'teste'] 
[a partir do item 4, remove 1 elemento, e no lugar coloca May e teste]
parametro1 - a partir de qual 
parametro2 - remove quantos elementos
parametro3 - insere o que e quantos ? (opcioal)
sort - sort an array --> transforma tudo em string e compara sequencia de UTF16
[1, 30, 4, 21, 10000]
nomedoarray.sort();
[1, 10000, 21, 30, 4]
nomedoarray.sort();

arrays usam conceito de ponteiro de memoria
let fila = [1, 2, 3]
undefined
let copiafila = fila
undefined
copiafila
(3) [1, 2, 3]
copiafila.push(4)
4
copiafila
(4) [1, 2, 3, 4]
fila
(4) [1, 2, 3, 4]
fila === copiafila
true