new Promise((resolve, reject) => {
    resolve();
}
)

// pra testar, no console colocar let blabla = fakeRequest();
let fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        setTimeout(() => {
            if (rand < 0.5) {
                resolve('Your fake data here: Page 1 from DOG');
            }
            reject('Request failed error...');
        }, 3000);
    })
}

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log('Done with request dogs/1: ' + data)
//     })
//     .catch((err) => {
//         console.log('Oh nooo: ' + err)
//     })

/******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* */

// Exemplo com NESTED, sempre passando o 'doNext'

// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
// }

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });

/******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* *//******* */

// Exemplo do fluxo de cima, porem usando PROMISE


let delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

// APENAS PARA COMPRACAO COM OQ ERA ANTES:
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
//}

delayedColorChange('red', 1000)
/*.then(() => {
    return delayedColorChange('orange', 1000);
})  ==> ao inves dessa forma, podemos fazer em uma linha apenas: */
.then(() => delayedColorChange('yellow', 1000)) // se DEIXAR SEM AS CHAVES { blabla }, nao precisa do RETURN (como descrito acima)
.then(() => delayedColorChange('green', 1000))
.then(() => delayedColorChange('blue', 1000))
.then(() => delayedColorChange('violet', 1000))
.then(() => delayedColorChange('indigo', 1000))

// APENAS PARA COMPRACAO COM OQ ERA ANTES:

// delayedColorChange('red', 1000, () => {
//     delayedColorChange('orange', 1000, () => {
//         delayedColorChange('yellow', 1000, () => {
//             delayedColorChange('green', 1000, () => {
//                 delayedColorChange('blue', 1000, () => {
//                     delayedColorChange('indigo', 1000, () => {
//                         delayedColorChange('violet', 1000, () => {

//                         })
//                     })
//                 })
//             })
//         })
//     })
// });