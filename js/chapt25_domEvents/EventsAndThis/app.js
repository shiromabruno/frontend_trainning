const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

let botoes = document.querySelectorAll('button')

for (let button of botoes){
    button.addEventListener('click', colorize ) //{
        //this.style.backgroundColor = makeRandColor(); // pra usar this, tem que ser function(). Nao pode ser () =>
        //this.style.color = makeRandColor(); // pra usar this, tem que ser function(). Nao pode ser () =>
   // });
}

let h1s = document.querySelectorAll('h1')

for (let h1 of h1s){
    h1.addEventListener('click', () => { 
        h1.style.backgroundColor = makeRandColor(); 
        h1.style.color = makeRandColor(); 
    });

}

function colorize(){
    this.style.backgroundColor = makeRandColor(); // pra usar this, tem que ser function(). Nao pode ser () =>
    this.style.color = makeRandColor(); // pra usar this, tem que ser function(). Nao pode ser () =>
}