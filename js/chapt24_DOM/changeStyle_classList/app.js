//console.dir(nomeDoObjeto)

let h1teste = document.querySelector('h1');
// h1teste.style ---> entrando no atributo style, vera q tem varios outros atributos

//so aparecera MAGENTA se tiver o magenta de forma inline style la no INDEX.HTML
//so se tiver assim no html: <h1 style="color: magenta">Silkie Chickens</h1>
// se tiver no CSS,nao aparece... ficaria " "
// exemplo somente no CSS: h1 {
   // color: olive
//}
//h1teste.style.color
//'magenta'

//nesse caso trocara para green e estara la no h1teste.style
h1teste.style.color = 'green'

h1teste.style.fontSize = '3em'

h1teste.style.border = '2px solid pink'

console.log(h1teste.style)

// se deixar sem o querySelectorALL, ira dar o erro de que nao eh iteravel
// app.js:23 Uncaught TypeError: allLinks is not iterable
let allLinks = document.querySelectorAll('a'); 
for (let link of allLinks){
    link.style.color = 'rgb(0, 200, 134)';
    link.style.textDecorationColor = 'magenta';
    link.style.textDecorationStyle = 'wavy';
}


// ****************************************************************************************************************************
// exercicio
// exercicio

let containerExer = document.querySelector('#container');
//containerExer.style.textAlign = 'center';

let imgExer = document.querySelector('img')
imgExer.style.width = '150px';

imgExer.style.borderRadius = '50%';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']; //PLEASE DON'T CHANGE THIS LINE!

//YOU CODE GOES HERE:
let todosSpans = document.querySelectorAll('span')
let i = 0;
for (let span of todosSpans){
    span.style.color = colors[i];
    i++;
}

// ****************************************************************************************************************************
// ClassList
// ClassList

const h2 = document.querySelector(`h2`);
h2.getAttribute('class')
//null

//h2.setAttribute('class', 'purple');

/*
h2.classList
DOMTokenList ['purple', value: 'purple']
h2.getAttribute('class')
'purple'
*/

// Para "juntar/concatenar" 2 classes (exemplo de purple e border)
//h2.setAttribute('class', 'border');
//let currentClasses = h2.getAttribute('class');
//h2.setAttribute('class', `${currentClasses} purple`)

//h2.classList
//DOMTokenList(2) ['border', 'purple', value: 'border purple']

//PODERIA SER ASSIM : 
h2.classList.add('purple')
//h2.classList.add('border')

// PARA REMOVEr
//h2.classList.remove('border')

// PARA VER QUAL CLASSE TEM
// h2.classList.contains('border') ===> false or true

// Para colocar ou tirar (nao precisa colocar add ou remove)
// Serve para ativar e desativar.
// Se ja tiver a class, ele tira. Se nao tiver class, ele coloca
h2.classList.toggle('border')

// ****************************************************************************************************************************
// exercicio
// exercicio
/*
let todosLi = document.querySelectorAll('li');

for (let umli of todosLi){
    umli.classList.toggle('highlight');
}
*/