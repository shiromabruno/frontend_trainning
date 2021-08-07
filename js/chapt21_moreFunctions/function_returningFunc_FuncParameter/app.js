//a FUNCTION dentro de FUNCTION meio que protege as FUNCTION de dentro. Apenas a Function mais externas consegue chamar
//Exemplo: chamando no console o funcaoDentro1() ou funcaoDentro2(). Apenas funcaoFora() fuciona
function funcaoFora(){
    let teste = ["listaFora1", 5, true, null]

    function funcaoDentro1(){
        let teste2 = ["listaFora2", 10, false, NaN]

        function funcaoDentro2(){

            for(let variavel of teste){
                console.log(`printando lista: ${variavel}` )
            }

            for(let variavel2 of teste2){
                console.log(`printando lista2: ${variavel2}` )
            }

        }
        funcaoDentro2()
    }
    
    funcaoDentro1()
}

const addAlgo = function (x,y){
    return x+y;
}

// CRIAR NO CONSOLE:  let dadosAleatorios = function (){return Math.floor(Math.random()*6) + 1}
// CHAMA dadosAleatorios no chamadorFuncaoTemplate(func) abaixo

function chamadorFuncaoTemplate(func){
    console.log(func());
}

function chamaFuncaoSemParametro(){
    console.log(`Resultado da funcao eh: ${addAlgo(8,20)}`)
}

function chamaFuncaoComParametroFuncao(func){
    console.log(`typeOf: ${typeof(func)}`)
    console.log(`Resultado da funcao eh: ${func(10,5)}`)
}

function chamaFuncaoComParametroValores(x, y){
    console.log(`Resultado da funcao eh: ${addAlgo(x,y)}`)
}
// -==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--
// -==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--==-=--

function operacaoCalculadora(operacao){
    switch(operacao){
        case "soma":
            return function soma(x, y){ return x+y }
        case "subtracao":
            return function subtracao(x, y){ return x-y }
        case "divisao":
            return function divisao(x, y){ return x/y }
        case "multiplicacao":
            return function multiplicacao(x, y){ return x*y }
    }
}

function chamadorFuncaoCalculadora(nome, x, y){
    nomeDoMetodo = operacaoCalculadora(nome);
    //console.log(nomeDoMetodo(10,30));
    chamadorTemplateCalculadora(nomeDoMetodo, x, y);
    console.log(`Resultado do chamadorFuncaoCalculadora: ${nomeDoMetodo(x,y)}`)
}

function chamadorTemplateCalculadora(func,x,y){
    console.log( `Resultado do chamadorTemplateCalculadora: ${func(x,y)}`);
}