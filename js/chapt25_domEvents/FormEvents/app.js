let tweetForm = document.querySelector('#tweetForm');
let container = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e){

    e.preventDefault(); // previne o comportamento do SUBMIT via EVENTO. No caso do behavior do submit eh dar refresh/redireciona a pagina

    // let usuario = document.querySelectorAll('input')[0].value;
    // let mensagem = document.querySelectorAll('input')[1].value;

    //Elements eh um dos aributos do objeto tweetForm
    //Poderia deixar: tweetForm.elements.username.value. Mas preferimos deixar passando com .value no addTweetFunction
    let usuarioElement = tweetForm.elements.username;
    let tweetElement = tweetForm.elements.tweet;

    // console.log("Via querySelectorAll: " + usuario, mensagem);
    // console.log("Via tweetForm.elements: " + usuarioElement, tweetElement);

    addTweetFunction(usuarioElement.value, tweetElement.value);

    usuarioElement.value = '';
    tweetElement.value = '';

});

let addTweetFunction = (usernameFuncao, tweetFuncao) =>{

    let newTweet = document.createElement('li');
    let bTag = document.createElement('b');

    bTag.append(usernameFuncao); //colocando o username "dentro" do B (bold)
    newTweet.append(bTag);
    newTweet.append(`- ${tweetFuncao}`);
    
    //console.log("tweet: " + newTweet); ===> se eu deixar dessa forma, ele vai LGOAR ASSIM: tweet: HTMLELement
    console.log(newTweet);
    container.append(newTweet);
}

// exericios:
// form.addEventListener('submit', function(e){
//     e.preventDefault();
    
//     let produto = form.elements.product.value;
//     let quantidade = form.elements.qty.value;
    
//     let lista = document.querySelector('ul');
//     let novoLi = document.createElement('li');
    
//     novoLi.append(`${quantidade} ${produto}`);
//     lista.append(novoLi);
    
// })