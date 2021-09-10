let botao = document.querySelector('#v2');
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

h1.onclick = function(){
    console.log("You clicked the H1 !!")
}