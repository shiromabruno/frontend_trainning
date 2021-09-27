// precisa desse script no HTML
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


// o data com o ticker ja vem com parse
axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log("Retorno de um axios.get('https://api.cryptonator.com/api/ticker/btc-usd') sem ser por funcao: " + res.data.ticker.price)
    })
    .catch(erro => {
        console.log("Erroooooo: " + erro)
    })

let minhaFuncaoBitCoinPrice = async () => {
    try {
        let resposta = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
        console.log("Resposta da funcao: let minhaFuncaoBitCoinPrice = async () =>{: " + resposta.data.ticker.price)
    } catch (e) {
        console.log("Erroooooo: " + e)
    }
}

// ****************************************************************************************************************************************
// ****************************************************************************************************************************************

let jokes = document.querySelector('#jokes');
let botao = document.querySelector('button')
//botao.addEventListener('click', addNewJoke()); ===> se deixar aqui a linha, dara erro falando que 
//Uncaught ReferenceError: Cannot access 'addNewJoke' before initialization

// se nao colocar o ASYNC no addNewJoke, aparecera esse erro:
// Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules
let addNewJoke = async () => {
    let piada = await getDadJoke();
    //console.log(piada.data.joke)
    let novoLI = document.createElement('LI');
    novoLI.append(piada); // poderia ser com novoLI.innerText...
    jokes.append(novoLI)
}


// precisa ter um header nessa API do jokes. Ver documentacao no google
let getDadJoke = async () => {
    try {
        let configHeader = { headers: { Accept: 'application/json' } };
        let resposta = await axios.get('https://icanhazdadjoke.com/', configHeader); // se deixar assim, o 'resposta' sera um codigo HTML inteiro...
        return resposta.data.joke;
    }
    catch (e) {
        console.log("Erro: " + e)
        return "Erro no endpoint Jokes... no Jokes today"
    }
}

botao.addEventListener('click', addNewJoke);



// const addNewJoke = async () => {
//     const jokeText = await getDadJoke();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI)
// }

// const getDadJoke = async () => {
//     try {
//         const config = { headers: { Accept: 'application/json' } }
//         const res = await axios.get('https://icanhazdadjoke.com/', config)
//         return res.data.joke;
//     } catch (e) {
//         return "NO JOKES AVAILABLE! SORRY :("
//     }

// }

// button.addEventListener('click', addNewJoke)
