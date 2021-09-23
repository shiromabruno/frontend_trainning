// fetch('https://api.cryptonator.com/api/ticker/btc-usd') // return a Promise
// .then(res => {
//     console.log("Resposta antes do PARSE JSON: ", res); // o RES eh um objeto, entao nao da pra ter o "+" console.log("Resposta: " + res);
//     console.log("o RES eh um objeto, entao nao da pra ter o '+' console.log('Resposta: ' + res);");
//     return res.json(); // o return caira no .THEN abaixo. PS: poderia estar o THEN linkado ja nessa linha... [res.json().then...]
// })
// .then(data => {
//     console.log("Informacao ja com PARSE do JSON: ", data)
//     console.log("Fazendo o data.ticker.price [ticker eh um dos atributos]: " + data.ticker.price);
// })
// .catch(error => {
//     console.log("Erro: ", error);
// })

let fetchBitcoinPrice = async () => {
    try {
        let resposta = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        //console.log(resposta);
        let data = await resposta.json();
        console.log(data.ticker.price);

        // chamando de novo com outra URL
        let respostabrl = await fetch('https://api.cryptonator.com/api/ticker/btc-brl');
        //console.log(resposta);
        let databrl = await respostabrl.json();
        console.log(databrl.ticker.price);
    }
    catch(erro){
        console.log("Erro na chamada: " + erro);
    }
    
}


// fetch('https://api.cryptonator.com/api/ticker/btc-usd')
//     .then(res => {
//         console.log("RESPONSE, WAITING TO PARSE...", res)
//         return res.json()
//     })
//     .then(data => {
//         console.log("DATA PARSED...")
//         console.log(data.ticker.price)
//     })
//     .catch(e => {
//         console.log("OH NO! ERROR!", e)
//     })


// const fetchBitcoinPrice = async () => {
//     try {
//         const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
//         const data = await res.json();
//         console.log(data.ticker.price)
//     } catch (e) {
//         console.log("SOMETHING WENT WRONG!!!", e)
//     }
// }