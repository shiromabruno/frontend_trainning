const person = {
    firstName: "bruno",
    lastName: "shiroma",
   fullName: function () {
        console.log(`${this.firstName} ${this.lastName}`)
    },
    /*fullName: () => {
        console.log(`${this.firstName} ${this.lastName}`)
    },*/
    shout: function() {
        setTimeout(() => { // EXECUTOU DIRETO SEM CHAMAAR PQ EH WINDOW ? // EXECUTOU DIRETO SEM CHAMAAR PQ EH WINDOW ?
            //console.log("AAAAHHHH")
            console.log(this.fullName())
        },3000)
    },
    calculate: x =>{
        console.log(`calculating 1 + 1 = ${1+1}`)
    }
}

// SET INTERVAL eh WINDOW FUNCTION 
// EXECUTOU DIRETO SEM CHAMAAR PQ EH WINDOW ?