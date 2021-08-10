
try{
hello.toUpperCase();
}
catch{
console.log("Error, nao conseguiu deixar maiusculo")
}

function somaNada(){
    try{
    console.log(x + y);
    }
    catch(e){
        console.log(`Error while executing somaNada function. ERROR: ${e}`)
    }
}

function somaAlgo(x,y){
    try{
        return (x + y);
    }
    catch(e){
        console.log(`Error while executing somaAlgo function. ERROR: ${e}`)
    }
}