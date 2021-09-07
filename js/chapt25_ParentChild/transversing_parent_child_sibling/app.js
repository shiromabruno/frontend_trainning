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
