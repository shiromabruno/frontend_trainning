// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

//NAO EH UM ARRAY. NAO DA PRA USAR MAP, REDUCE, ETC
//pegando pela TAG
const allImages = document.getElementsByTagName('img');
const allPara = document.getElementsByTagName('p');

//troca as TODAS as IMGS do SITE.
//mas nao o codigo abaixo nao altera o INDEX.HTML
for (let imagem of allImages){
    console.log(imagem.src) // -> mostra a URL, tipo: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg
    //imagem.src='https://images.unsplash.com/photo-1598518142144-68fdb94156e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80';
}

//capturando pela CLASS
let allSquareClass = document.getElementsByClassName('square');

//somente trocou IMGS das classes SQUARE, a img de cima no BANNER se mantem
//Nao altera no INDEX
for (let square of allSquareClass){
    //console.log(square.baseURI)
    //square.src='https://media.istockphoto.com/photos/manufacturing-storage-warehouse-picture-id186599719?s=612x612';
}


// *******************************************************************************************************
// *******************************************************************************************************
// Substitui o getElementsByTagName, getElementsByTId e .getElementsByClassName 

// querySelector pela classe ou tipo, retorna first match (Tag and Class)
// querySelectorAll - retorna a collection de elements

console.log(document.querySelector('h1')); // ===> first match, primeiro que encontrar
console.log(document.querySelector('#toc'));  
console.log(document.querySelector('.square'));  // ===> first match, primeiro que encontrar

console.log(document.querySelector('img:nth-of-type(2)')) // ===> pega o segundo IMG
console.log(document.querySelector('a[title = "Java"]')) // <a href="/wiki/Java" title="Java">Java</a> . Selecionando pelo type e ATRIBUTO

//console.log(document.querySelector('p')) // ===> retorna somente um P
//console.log(document.querySelectorAll('p')) // ===> retrna tds P
let objetoP = document.querySelectorAll('p');
console.log("imprimindo atributo baseURI do objetoP [1]>: " + objetoP[1].baseURI); 

// seleciona todos os A dentro de um P. Descendencia. Quero os A dentro de P
// se for: document.querySelectorAll('a') retorna 24.
// se for: document.querySelectorAll('p a') retorna 17.
let todosLinks = document.querySelectorAll('p a');
for (let link of todosLinks){
    console.log(link.href);
}

// Ultimo Exercicio:
// let checkbox = document.querySelector('input[type = "checkbox"]');