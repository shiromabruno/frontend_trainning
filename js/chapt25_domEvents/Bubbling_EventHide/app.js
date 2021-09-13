const button = document.querySelector('#changeColor');
const container = document.querySelector('#container');

// ao clicar pra randomizar a cor, ele desaparece por conta da fncionalidade do HIDE do container
// para isso temos o stopPropagation();
button.addEventListener('click', function(e){
    container.style.backgroundColor = makeRandColor();
    e.stopPropagation(); // => para o evento bubbling, para os outros eventos
})

// pra desaparecer, colocar display:none
container.addEventListener('click', function(){
    container.classList.toggle('hide')
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}