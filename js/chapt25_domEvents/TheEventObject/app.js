//os atributos do evento dependem do tipo do EventListener (click, keydown, mouseup...)

document.querySelector('button').addEventListener('click', function(event){
    console.log(event)
})

let input = document.querySelector('input');

input.addEventListener('keydown', function(event){ // keydown eh quando pressiono a tecla. (se manter pressionado, vai ficar contando a quantidade printada do keydown no console.log)
    console.log(event.key) // a, shift
    console.log(event.code) // KeyA, shiftLeft
})

/*input.addEventListener('keyup', function(){ // keyup eh quando vc release a tecla
    console.log('keyup')
})*/

window.addEventListener('keydown', function(event){
    //console.log(event.key) // a, shift, arrowLeft
    //console.log(event.code) // KeyA, shiftLeft, arrowLeft

    switch(event.code){
        case 'ArrowUp':
            console.log("tecla pra cima");
            break;
        case 'ArrowDown':
            console.log("tecla pra baixo");
            break;
        case 'ArrowLeft':
            console.log("tecla pra esquerda");
            break;
        case 'ArrowRight':
            console.log("tecla pra direita");
            break;
        default:
            console.log('outra tecla!')
    }

})

// window.addEventListener('mousedown', function(event){
//     console.log(event.key) // a, shift
//     console.log(event.code) // KeyA, shiftLeft
// })