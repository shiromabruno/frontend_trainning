let input = document.querySelector('input');
let h1 = document.querySelector('h1')

//change funciona , nesse caso, quando vc preenche algo no textfield e leave o textfield com a alteracao
//se vc so escrever coisa e nao sair do text field, nada ocorre. Se vc escreveru algo e saiu. Acontece a fucntion. Se vc entrar de novo, nao alterar nada e sair, nada ocorre [pois nao houve alteracao]
//mesmo q "tenha alteracao" ,  mas vc apagou e voltou o valor de novo, nao houve alteracao nesse caso. Exemplo: tinha dog. Ai vc entrou e agaou o "g" e colocou de novo o "g" e saiu. Nao houve alteracao
input.addEventListener('change', function(e){
    console.log('houve change')
})

//no input, sempre quando digita algo no textfiled, ativa a function. Mesmo alterando ou nao o conteudo.
// somente CTRL + C nao conta como input, mas se fizer ctrol+V ai sim conta
input.addEventListener('input', function(e){
    //console.log('houve input')
    h1.innerText = input.value;
})

/*
Exercicio
let texto = document.querySelector('#username');
let h1 = document.querySelector('h1');

texto.addEventListener('input', function(){
    h1.innerText = `Welcome, ${texto.value}`
    if(texto.value == ''){
        h1.innerText = `Enter Your Username`
    }
})
*/