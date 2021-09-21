new Promise((resolve, reject) => {
    resolve();
}
)

// pra testar, no console colocar let blabla = fakeRequest();
let fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        let rand = Math.random();
        setTimeout(() => {
            if (rand < 0.4) {
                resolve('Your fake data here: Page 1 from DOG');
            }
            reject('Request failed error...');
        }, 3000);
    })
}

async function make2Requests(){
    try{
        let data1 = await fakeRequest('www.google.com/dogs1')
        console.log(`Resultado first request:  ${data1}`)
        let data2 = await fakeRequest('www.google.com/dogs2')
        console.log(`Resultado second request:  ${data2}`)
    }
    catch(e){
        console.log("Error, message error: " + e);
    }
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
        if (delay > 5000){
            reject("Teste lancando erro se delay > 5000")
        }
        else{
            setTimeout(() => {
                document.body.style.backgroundColor = color;
                resolve();
            }, delay)
    }
    })
}

// APENAS PARA COMPRACAO COM OQ ERA ANTES:
// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout(() => {
//         document.body.style.backgroundColor = newColor;
//         doNext && doNext();
//     }, delay)
//}

// delayedColorChange('red', 1000)
// /*.then(() => {
//     return delayedColorChange('orange', 1000);
// })  ==> ao inves dessa forma, podemos fazer em uma linha apenas: */
// .then(() => delayedColorChange('yellow', 1000)) // se DEIXAR SEM AS CHAVES { blabla }, nao precisa do RETURN (como descrito acima)
// .then(() => delayedColorChange('green', 1000))
// .then(() => delayedColorChange('blue', 1000))
// .then(() => delayedColorChange('violet', 1000))
// .then(() => delayedColorChange('indigo', 1000))

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

async function rainbow() {
    await delayedColorChange('red', 1000) // o AWAIT espera o return dessa function (PROMISE) estar OK para rodar o restante do cod

    console.log("So rodara esse console.log se ''await delayedColorChange('red', 1000)'' foi OK!")

    await delayedColorChange('orange', 1000)
    await delayedColorChange('yellow', 1000)
    await delayedColorChange('green', 1000)
    await delayedColorChange('blue', 6000) // se deixar assim, index.html:1 Uncaught (in promise) Teste lancando erro se delay > 5000. E nao roda as linhas de baixo...
    //await delayedColorChange('blue', 1000)
    await delayedColorChange('indigo', 1000)
    await delayedColorChange('violet', 1000)

    return "retorno do async function rainbow()"

}

// rainbow()
//     .then((data) => {
//         console.log("Chamada do rainbow() OK. Resultado: " + data)
//     })
//     .catch((erro) => {
//         console.log("Erro no chamado do rainbow(). Erro retornado: " + erro)
//     })  

async function printRainbow(){
    await rainbow()
    .then((data) => {
        console.log("Chamada printRainbow() OK. Resultado: " + data)
    })
    .catch((erro) => {
        console.log("Erro no chamado do printRainbow(). Erro retornado: " + erro)
    })  

}