// const allLinks = document.querySelectorAll('a');

// for (let link of allLinks) {
//     link.innerText = 'I AM A LINK!!!!'
// }


// for (let link of allLinks) {
//     link.style.color = 'rgb(0, 108, 134)';
//     link.style.textDecorationColor = 'magenta';
//     link.style.textDecorationStyle = 'wavy'
// }

//NAO EH UM ARRAY. NAO DA PRA USAR MAP, REDUCE, ETC
const allImages = document.getElementsByTagName('img');
const allPara = document.getElementsByTagName('p');

//troca as TODAS as IMGS do SITE.
//mas nao o codigo abaixo nao altera o INDEX.HTML
for (let imagem of allImages){
    console.log(imagem.src) // -> mostra a URL, tipo: https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg
    //imagem.src='https://images.unsplash.com/photo-1598518142144-68fdb94156e5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=332&q=80';
}