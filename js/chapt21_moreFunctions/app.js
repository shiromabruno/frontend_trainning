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

const addalgo = function (x,y){
    return x+y;
}