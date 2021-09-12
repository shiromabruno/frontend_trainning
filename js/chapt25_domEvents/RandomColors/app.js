let botao = document.querySelector('button')
let h1 = document.querySelector('h1')

botao.addEventListener('click', function(){
    //document.body.style.backgroundColor = 'olive';

    let newColorBack = randomizarCor();

    document.body.style.backgroundColor = newColorBack;
    h1.innerText = newColorBack;

})

let randomizarCor = () => {
    let r = Math.floor(Math.random() * 255) +1
    let g = Math.floor(Math.random() * 255) +1
    let b = Math.floor(Math.random() * 255) +1

    let newColor = `rgb(${r}, ${g}, ${b})`
    return newColor;
}