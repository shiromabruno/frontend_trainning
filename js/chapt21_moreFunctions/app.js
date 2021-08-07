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