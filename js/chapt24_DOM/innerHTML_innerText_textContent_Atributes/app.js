// Apenas mostra o Texto que aparece no index.html
//Se um texto estiver com PROPERTY = NONE, ele NAAOO IRA MOSTRAR ! As TAGS nao sao mnostradas. Mostra os /n pra pular linha
let p1InnerText = document.querySelector('p').innerText
//'The Silkie (sometimes spelled Silky) is a breed of chicken named for its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are often exhibited in poultry shows, and appear in various colors. In addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet, should be handled with care.'

//muda o texto da pagina. HTML fica preservado
document.querySelector('p').innerText = "REMOVA ESSA LINHA NO APP.JS PARA VOLTAR TEXTO ORIGINA NO INDEX.HTML"


// Mostra pulos de linhas com o /N e tambem  gets the content of all elements, including <script> and <style> elements
// Se um texto estiver com PROPERTY = NONE, ele IRA MOSTRAR SIM.
let pNthOfType2 = document.querySelector('p:nth-of-type(2)').textContent
let p1TextContent = document.querySelector('p').textContent
//The Silkie (sometimes spelled Silky) is a breed of chicken named for\n        its atypically fluffy plumage, which is said to feel like silk and satin. The breed has several other unusual qualities, such as\n        black skin and bones, blue earlobes, and five toes on each foot, whereas most chickens only have four. They are\n        often exhibited in poultry shows, and appear in various colors. In\n        addition to their distinctive physical characteristics, Silkies are well known for their calm, friendly\n        temperament. It is among the most docile of poultry. Hens are also exceptionally broody, and care for young well. Though they are fair layers themselves, laying only\n        about three eggs a week, they are commonly used to hatch eggs from other breeds and bird species due to their\n        broody nature. Silkie chickens are very easy to keep as pets. They are suitable for children, but like any pet,\n        should be handled with care.\n    

let allLinks = document.querySelectorAll('a');
for (let link of allLinks){
    link.innerText = "Troquei o innerText de todos com TAG = a."
}

// Mostra o texto jutno com as TAGS HTML
document.querySelector('p:nth-of-type(2)').innerHTML

// Desse jeito nao funciona, ira aparecer la na pagina: <i> colcoando em italico </i>
// document.querySelector('h1').innerText = '<i> colcoando em italico </i>'

//Desse jeito FUNCIONA ! , precisa do INNET TEXT para deixar em Italico (colocar TAGS)
document.querySelector('h1').innerHTML = '<i> colocoando em italico com as tags < i > usando innetHTML</i>. Para voltar a pagina inteira ao original, remover no  <b style = "color: pink;"> <u> app.js </u> </b> os Testes feitos'
// concatenando codigo com o +=
document.querySelector('h1').innerHTML += '<sup> colocando um LINK em CIMA com <sup > e += </sup>'