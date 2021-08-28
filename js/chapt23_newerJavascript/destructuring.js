const resultPodium = ["vencedor", "vice", "3 lugar", "perdedor1", "perdedor2"]

const [gold, silver, bronze, ...others] = resultPodium;
const [soPrimeiro, soSegundo] = resultPodium;

console.log("o primeiro eh: " + gold)
console.log("o segundo eh: " + silver)
console.log("o terceiro eh: " + bronze)
console.log("o resto eh: " + others)

console.log("so o primeiro eh: " + soPrimeiro)
console.log("so o segundo eh: " + soSegundo)

// poderia ser:
// const primeiroLugar  = resultPodium[0]
// const segundoLugar  = resultPodium[1]
// ...

// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

const brunoShiroma = {
    name: "bruno",
    last: "shiroma",
    age: 25,
    male: true,
    language: "PT",
    musicas: ["pop", "rock", "funk"],
    teste: "testando",
    numeroX: 12345,
    algumboolea: false
}

const anonimo = {
    name: "NomeAnonimo",
    last: "SobrenomeAnonimo",
    age: 30,
}

// pode colocar em qualquer ordem
const {name, last, age, male, language, musicas, ...others2} = brunoShiroma
//const {language} = brunoShiroma ---> poderia deixar so assim caso quisesse apenas criar o email
const {name: nomeRedefinido, last: sobrenomeRedefinido, age: idadeRedefinido} = brunoShiroma

const {name: nomeAnonimoRedefinido, last: sobrenomeAnonimoRedefinido, age: idadeAnonimoRedefinido, 
    pais = "Nao sabemos", sexo =  false, languageAnon = "Sei la"} = anonimo


console.log("o nome eh: " + name)
console.log("o sobrenome eh: " + last)
console.log("a idade eh: " + age)
console.log("a lingua eh: " + language)
console.log("Eh male? :" + male)
console.log("Musicas :" + musicas)
console.log("Outras infos: " + others2)
console.log("")
console.log("O nome REDEFINIDO: " + nomeRedefinido)
console.log("O sobrenome REDEFINIDO: " + sobrenomeRedefinido)
console.log("A idade REDEFINIDO: " + idadeRedefinido)
console.log("")
console.log("ANONIMO O nome REDEFINIDO: " + nomeAnonimoRedefinido)
console.log("ANONIMO O sobrenome REDEFINIDO: " + sobrenomeAnonimoRedefinido)
console.log("ANONIMO A idade REDEFINIDO: " + idadeAnonimoRedefinido)
console.log("ANONIMO pais: " + pais)
console.log("ANONIMO sexo: " + sexo)
console.log("ANONIMO language: " + languageAnon)