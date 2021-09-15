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
            if (delay > 4000) {
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
fakeRequestCallback('books.com/page1', 
    function(response){
        console.log("it worked in time, page1! " + response)
        fakeRequestCallback('books.com/page2',
        (response) => {
            console.log("it worked in time, page2! " + response)
            fakeRequestCallback('books.com/page3',
                function(response){
                    console.log("it worked in time, page3! " + response)
                },
                (err) => {
                    console.log("did not work in time page3... " + err)
                }
            )
        },
        function (err){
            console.log("did not work in time page2... " + err)
        }
        )
    }, 
    (err) => {
        console.log("did not work in time page1... " + err)
    }
)







// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })



