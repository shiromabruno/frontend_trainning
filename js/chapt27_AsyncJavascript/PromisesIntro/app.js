// THE CALLBACK VERSION
const fakeRequestCallback = (url, success11, failure22) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure22('Connection Timeout :(')
        } else {
            success11(`Here is your fake data from ${url}`)
        }
    }, delay)
}
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 3000) {
                reject('Connection Timeout :(')
            } else {
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

// nesse exemplo de chamada, temos q passar em cada request a funcao se OK e a funcao se NOK.
// Se OK, chama a mesma funcao e passando de novo o OK e o NOK...
// como pode ver, cada request, fica ainda maior o nesting...
// promise ajuda a arrumar o nesting

// fakeRequestCallback('books.com/page1', 
//     function(response){
//         console.log("it worked in time, page1! " + response)
//         fakeRequestCallback('books.com/page2',
//         (response) => {
//             console.log("it worked in time, page2! " + response)
//             fakeRequestCallback('books.com/page3',
//                 function(response){
//                     console.log("it worked in time, page3! " + response)
//                 },
//                 (err) => {
//                     console.log("did not work in time page3... " + err)
//                 }
//             )
//         },
//         function (err){
//             console.log("did not work in time page2... " + err)
//         }
//         )
//     }, 
//     (err) => {
//         console.log("did not work in time page1... " + err)
//     }
// )

//** *///** *///** *///** *///** *///** *///** *///** *///** *///** *///** *///** *///** *///** */
// let requestShi = fakeRequestPromise('google.com/api/brunoshiroma');
// requestShi
    // .then(() =>{
    //     console.log("Promise Shiroma worked!")
    // })
    // .catch(() => {
    //     console.log("Error in Promise Shiroma...")
    // })

// ou vc pode faazer igual abaiaxo, SEM TER UM LET requestShi

// fakeRequestPromise('google.com/api/brunoshiroma/page1')
// .then(() =>{
//     console.log("Promise Shiroma 1 worked!")
//     fakeRequestPromise('google.com/api/brunoshiroma/page2')
//     .then(() =>{
//         console.log("Promise Shiroma 2 worked!")
//         fakeRequestPromise('google.com/api/brunoshiroma/page3')
//         .then(() =>{
//             console.log("Promise Shiroma 3 worked!")
//         })
//         .catch(() => {
//             console.log("Error in Promise 3 Shiroma...")
//         })
//     })
//     .catch(() => {
//         console.log("Error in Promise 2 Shiroma...")
//     })
// })
// .catch(() => {
//     console.log("Error in Promise 1 Shiroma...")
// })



// Substiduindo a codigo de cima por esse de baixo mais clean

fakeRequestPromise('google.com/api/brunoshiroma/page1')
    .then((data) => { // data eh o retorno Here is your fake data from ${url} ou Connection Timeout :(
        console.log("Promise Shiroma 1 worked! " + data)
        return fakeRequestPromise('google.com/api/brunoshiroma/page2') // como tem RETURN, nao precisa de nested; o THEN na linha 99 eh o tratamento dessa linha RETURN
    })
    .then((data) => {
        console.log("Promise Shiroma 2 worked! " + data)
        return fakeRequestPromise('google.com/api/brunoshiroma/page3')
    })
    .then((data) => {
        console.log("Promise Shiroma 3 worked! " + data)
    })
    .catch((err) =>{
        console.log("Request FAILED! " + err)
    })