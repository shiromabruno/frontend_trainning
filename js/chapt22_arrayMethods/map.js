let numeros = [1, 2, 3, 4, 5, 6]

let numerosDobrados = numeros.map(function dobra(elemento){
return elemento*2;
})

//console.log(numerosDobrados)

let listaAlunos = [
{
    nome: "fulano",
    nota: 5
},
{
    nome: "beltrano",
    nota: 3
},
{
    nome: "aluno que passou",
    nota: 8
},
{
    nome: "ciclano",
    nota: 4
}
]

let listaAprovados = listaAlunos.map(
    function validarAprovados(elemento){
        if (elemento.nota >= 6){
           return elemento;
           //return elemento.nome;
        }
    }
)

console.log(listaAprovados);