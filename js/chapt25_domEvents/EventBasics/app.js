let botao = document.querySelector('#v2');
let botao2 = document.querySelector('#v3');
let botao3 = document.querySelector('#v4');
let botao4 = document.querySelector('#v5');
let h1 = document.querySelector('h1');

botao.onclick = function(){
    //alert("You clicked using JAVASCRIPT")
    console.log("You clicked using JAVASCRIPT")
}

function mouseEnter(){
    //alert("You mouseEnter using JAVASCRIPT")
    console.log("You mouseEnter using JAVASCRIPT")
}

botao.onmouseenter = mouseEnter; // ===> passou mouse em cima, executa
//botao.addEventListener('mouseenter', mouseEnter);

h1.onclick = function(){
    console.log("You clicked the H1 !!")
}


botao2.addEventListener('click', () => {
//botao2.addEventListener('dblclick', () => {
    console.log("You clicked/doubled using AddEventListener JS")
})

botao3.addEventListener('mouseup', function(){
    alert('MouseUP, so aparece dps q release mouse button')
})

/**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** */

function twist(){
    console.log("Twist")
}

function shout(){
    console.log("shout")
}

// dessa forma so fara o "SHOUT", pois tem o lance do overwritten. Para dar console no "Twist" e "Shout" precisa do addEventListener
// botao4.onclick = twist;
// botao4.onclick = shout;

// dessa forma abaixo, ira printar o "Twist" e "Shout". Exemplo acima so ficaria o "Shout"
botao4.addEventListener('click', twist, {once: true}); // so roda o twist 1x ONCE =  true
botao4.addEventListener('click', shout);


/**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** *//**** */