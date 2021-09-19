// async function hello(){
//     return true; // teste. Pode treturn qualquer value
// }

// let sing = async () => {
//     throw new Error("ERROR in request") // teste ERROR
//     //return 'Data do request OK!'      // teste OK
// }

// sing()
//     .then((data) => {
//         console.log("Promise OK, here data: " + data)
//     })
//     .catch((err) =>{
//         console.log("Erro na chamada, here data: " + err)
//     })

let login =  async (username, password) => {
    if(!username || !password ) throw "Missing credentials!"
    if(password === "senhacerta") return "You are logged in" 
    throw "Invalid password"
}

login("usuario", "senhacerta") // login("usuario", "senhaerrada") login() login("usuario")
.then((data) => {
    console.log("Logging OK: " + data)
})
.catch((err) => {
    console.log("Erro no request: " + err)
})