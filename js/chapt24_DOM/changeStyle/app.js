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