let req = new XMLHttpRequest();
let testeRetorno;

req.onload = function(){
    console.log("O request foi feito com sucesso!");
    //console.log(this.responseText);
    let testeRetorno = JSON.parse(this.responseText);
    console.log(testeRetorno); // {ticker: {…}, timestamp: 1632265622, success: true, error: ''}
    console.log(testeRetorno.ticker.price) // 40630.46360092
}

req.onerror = function(){
    console.log("Houve um erro no request");
    console.log(this);
}

req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd');
req.send();


// NOT AT ALL IMPORTANT TO REMEMBER ANY OF THIS CODE!
// const req = new XMLHttpRequest();

// req.onload = function () {
//     console.log("ALL DONE WITH REQUEST!!!")
//     const data = JSON.parse(this.responseText);
//     console.log(data.ticker.price);
// }

// req.onerror = function () {
//     console.log("ERROR!!!")
//     console.log(this);
// }

// req.open('GET', 'https://api.cryptonator.com/api/ticker/btc-usd')
// req.send();