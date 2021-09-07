//console.dir(nomeDoObjeto)

let firstBold = document.querySelector('b')
console.log(`Elemento atual`)
console.log(firstBold)

//para "subir um nivel" para o PAI, no caso o <p>
//parentElement
let paiFirstBold = firstBold.parentElement;
console.log(`Elemento pai`)
console.log(paiFirstBold)

//Mostra quantos filhos tem
paiFirstBold.childElementCount
//8 ou 0 (firstBold)

//Mostra quais sao os filhos
paiFirstBold.children
//HTMLCollection(8) [b, b, a, a, a, a, a, a] ou HTMLCollection [] (firstBold)

paiFirstBold.children[0]
//b  ===> eh o firstBold

//******************* */****************** */****************** */****************** */****************** */****************** */
//******************* */****************** */****************** */****************** */****************** */****************** */
// SIBLINGS SIBLINGS SIBLINGS SIBLINGS SIBLINGS SIBLINGS SIBLINGS SIBLINGS SIBLINGS 

//******************* */****************** */****************** */****************** */****************** */****************** */
//******************* */****************** */****************** */****************** */****************** */****************** */

let squareImg = document.querySelector('.square')

// mostra o proximo NODE. 
squareImg.nextSibling
// #text ===> voltara text pois: #text nodes are inserted in the DOM where whitespace occurs between tags (i.e. after the closing tag of an element and before the opening tag of the next).
/*
Exemplo abaixo:
div id="div-1">Here is div-1</div>
<div id="div-2">Here is div-2</div>

<script>
var el = document.getElementById('div-1').nextSibling,
    i = 1;

console.group('Siblings of div-1:');

while (el) {
  console.log(i, '. ', el.nodeName);
  el = el.nextSibling;
  i++;
}

console.groupEnd();
</script>

/**************************************************
  The console displays the following:

     Siblings of div-1

      1. #text
      2. DIV
      3. #text
      4. SCRIPT
*/

// Agora sim o element seguinte que eh o proximo IMG
squareImg.nextElementSibling

//******************* */****************** */****************** */****************** */****************** */****************** */
//******************* */****************** */****************** */****************** */****************** */****************** */
// Append Child Append Child Append Child Append Child Append Child Append Child Append Child Append Child Append Child 

//******************* */****************** */****************** */****************** */****************** */****************** */
//******************* */****************** */****************** */****************** */****************** */****************** */

let novoImg = document.createElement('img')
//mostra os atributos normalmente
//console.dir(novoImg)

novoImg.src ='https://images.unsplash.com/photo-1630257956817-0734ff3846dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'

// 2 maneiras de coocar no HTML: APPEND e APPENDCHILD

document.body.appendChild(novoImg);
novoImg.classList.add('square')

let novoH3 = document.createElement('h3');
novoH3.innerText = "I am a new H3 here!"
document.body.appendChild(novoH3);

//-=-=-=-=
//Example de Append
/*
let div = document.createElement("div")
div.append("Some text")

let div = document.createElement("div")
let p = document.createElement("p")
div.append("Some text", p)
*/

let firstP = document.querySelector('p');
firstP.append("colocando esse texto com firstP.append !!!", "outro texto adicionado agora !!")
//nesse caso nao da pra usar APPEND CHILD, pois precisa ser um NODE (elemento/variavel)

//-=-=-=-=
//Example de Prepend

let novoB = document.createElement('b');
novoB.append("Novo elemento <b> !") //======> usando APPEND ao inves de INNERTEXT
firstP.prepend(novoB)

//-=-=-=-=
//Example de insertAdjacentElement
// targetElement.insertAdjacentElement(position, element);
/*A DOMString representing the position relative to the targetElement; must match (case-insensitively) one of the following strings:
'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself. */

let novoH2 = document.createElement('h2');
novoH2.innerText =  "Inserindo esse H2 com insertAdjacentElement"
let novoH22 = document.createElement('h2');
novoH22.innerText =  "Segundo H2 com insertAdjacentElement"

//vamos inserir entre o H1 e a imagem:
let aux = document.querySelector('h1');
aux.insertAdjacentElement('afterend', novoH2);

let aux2 = document.querySelector('img');
aux2.insertAdjacentElement('beforebegin', novoH22);


//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
//Example de after. TEM TAMBEM O BEFORE (Nao suportado por todos browsers [IE])

let novoH4 = document.createElement('h4');
novoH4.innerText = "novo H4 inserido usando aux.after(novoH4)"
aux.after(novoH4);
