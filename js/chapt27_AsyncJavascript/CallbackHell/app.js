// setTimeout(() =>{
//     document.body.style.backgroundColor = 'red';
// }, 1000)

// setTimeout(() =>{
//     document.body.style.backgroundColor = 'orange';
// }, 2000) // se deixar como 1000 tbm, ai ficara orange e nao ficara red. Pois ambas as cores aparecerao e o orange se sobressai por conta do overwrite

// setTimeout(() =>{
//     document.body.style.backgroundColor = 'yellow';
// }, 3000)

//Substituindo as 3 functions acima por esse de baixo:


// setTimeout(() =>{
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() =>{
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() =>{
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() =>{
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() =>{
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)

//Substituindo a funcao acima por esse de baixo:

let delayedColorChange = (newColor, delay, doNext) => { // sem o doNext, daria o overwrite caso chamasse: delayedColorChange('olive', 3000); e delayedColorChange('teal', 3000); [deixaria teal no final]
    setTimeout(() =>{  // a ideia eh depois de terminar o tempo do setTimeOut, executar o doNext
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

delayedColorChange('red', 1000, () =>{
    delayedColorChange('orange', 1000, () =>{
        delayedColorChange('yellow', 1000, () =>{
            delayedColorChange('green', 1000, () =>{
                delayedColorChange('blue', 1000, () =>{
   
                });
   
            });
        });
    });
});


// ===============
// YIKES!!!!!!!!!!!
// ===============
// setTimeout(() => {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(() => {
//         document.body.style.backgroundColor = 'orange';
//         setTimeout(() => {
//             document.body.style.backgroundColor = 'yellow';
//             setTimeout(() => {
//                 document.body.style.backgroundColor = 'green';
//                 setTimeout(() => {
//                     document.body.style.backgroundColor = 'blue';
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000)
// }, 1000)


// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// // STILL A LOT OF NESTING!!!
// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {

//                 })
//             })
//         })
//     })
// });


// searchMoviesAPI('amadeus', () => {
//     saveToMyDB(movies, () => {
//         //if it works, run this:
//     }, () => {
//         //if it doesn't work, run this:
//     })
// }, () => {
//     //if API is down, or request failed
// })




