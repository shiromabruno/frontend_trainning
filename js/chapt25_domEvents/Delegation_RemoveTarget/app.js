
const tweetForm = document.querySelector('#tweetForm');
const tweetsContainer = document.querySelector('#tweets');

// so funciona quando os LIs ja estão na page (no caso, estao explicitos no HTML)
// para funcionar, podemos colocar esse EVENT de delete no PARENT dos LIs, que no caso seria o UL. Exemplo abaixo
// let lis = document.querySelectorAll('li');
// for (let li of lis){
//     li.addEventListener('click', function(){
//         li.remove();
//     })
// }

tweetsContainer.addEventListener('click', function(e){
    // console.log(e.target)
    // console.dir(e.target) ----> ele usou esse pra ver qual eh o nodeName
    // se a parte da esquerda for verdadeira, a parte da direita "sempre sera verdadeira"
    // se a esquerda for falsa, a direita nao importa
    // a direita nesse caso eh sempre um verdadeiro
    // se nao tivesse a esquerda, o  <p> teste </p> tbm seria deletado
    e.target.nodeName === 'LI' &&  e.target.remove();
})

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    addTweet(usernameInput.value, tweetInput.value)
    usernameInput.value = '';
    tweetInput.value = '';
});

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const bTag = document.createElement('b');
    bTag.append(username)
    newTweet.append(bTag);
    newTweet.append(`- ${tweet}`)
    tweetsContainer.append(newTweet);
}





