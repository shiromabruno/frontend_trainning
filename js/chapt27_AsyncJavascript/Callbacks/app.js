console.log("Iniciando comunicacao com server");

setTimeout(() => { // o JS stack passa pro browser (c++) falando: "hey set timer para 3s e depois me avisa pra eu rodar a function (no caso  o () => { console.log})"
    console.log("Calling server...")
}, 3000);

console.log("Service is done") // essa LOG apareceu antes do Calling server...
// isso ocorre pq browsers (escritos em c++) conseguem pegar umas tasks in background como requests e setTimeout
// JS call stacks passa essas tasks pro browser e uma vez que o browser finaliza, ele faz push no stack JS como callback